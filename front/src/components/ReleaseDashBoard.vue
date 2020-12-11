<template>
  <v-data-table :headers="headers" :items="releases" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Releases</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon 
            v-bind="attrs"
            v-on="on"
            color="grey"
            style=" position:relative; right:5px"
            >help_outline</v-icon>
          </template>
          <span>Message pour la doc user release</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Ajouter une release
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Ajouter une release</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="releaseName"
                      label="Nommez votre release"
                      single-line
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      v-model="version"
                      :items="['Major', 'Minor', 'Patch']"
                      label="Qualifiez cette release"
                      return-object
                      single-line
                      @change="log"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="date"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Picker in dialog"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-select
                      v-model="issuesSelected"
                      :items="issues"
                      item-text="title"
                      item-value="id"
                      attach
                      chips
                      label="Issues"
                      multiple
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="release.sources"
                      label="lien vers la release"
                      :rules = "rules"
                    ></v-text-field>
                  </v-col>
                </v-row>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save" :disabled="!valid"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Voulez vous supprimer cette release?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.issues`]="{ item }">
      <list-issues-dialog :issues="item.issues"/>
    </template>
    <template v-slot:[`item.sources`]="{ item }">
      <a :href="item.sources"><v-icon small> mdi-github </v-icon></a>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import moment from "moment";
import ListIssuesDialog from './releases/ListIssuesDialog.vue';
export default {
  components:{
    ListIssuesDialog
  },
  data: () => ({
    valid:false,
    releaseName:"",
    date: new Date().toISOString().substr(0, 10),
    dialog: false,
    issuesSelected: [],
    version:"",
    modal: false,
    dialogDelete: false,
    issues: [],
    rules: [v=> /https:\/\/github\.com/.test(v) || 'Vous devez transmettre un lien github'],
    headers: [
      {
        date:"",
        text: "version",
        align: "start",
        sortable: false,
        value: "version",
        width: "15%",
      },
      { text: "issues liées", value: "issues", width: "40%" },
      { text: "date", value: "date", width: "25%" },
      { text: "sources", value: "sources", width: "5%" },
      { text: "Actions", value: "actions", sortable: false, width: "5%" },
    ],
    releases: [],
    editedIndex: -1,
    release: {
      id:"",
      issues: [],
      version: "",
      date: "",
      sources: "",
    },
    defaultItem: {
      id:"",
      issues: [],
      version: "",
      date: "",
      sources: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  async created() {
    await this.initialize();
    const response = await this.axios.get(`${this.$proxyIssues}/issues/`);
    this.issues = response.data.map((issue) => {
      return { title: issue.title, id: issue._id };
    });
    const responseLastReleaseInfos = await this.axios.get(`${this.$proxyReleases}/releases/getLastReleaseInfos`);
    const releaseInfos = responseLastReleaseInfos.data;
    this.issuesSelected = releaseInfos.issues || [];
    this.lastVersion = releaseInfos.version || "v0.0.0";
    console.log(releaseInfos);
    console.log(this.issuesSelected);
    console.log(this.lastVersion);
  },

  methods: {
    log(event) {
      console.log(event);
    },
    async initialize() {
      this.releases=[];
      this.axios.get(`${this.$proxyReleases}/releases/`).then((response) => {
        response.data.forEach((release) => {
          const promises = release.issues.map(
            (issue) =>
              new Promise((resolve, reject) => {
                this.getIssueId(issue)
                  .then((name) => resolve(name))
                  .catch((error) => reject(error));
              })
          );
          Promise.all(promises).then((issues) => {
            const result = {
              id: release._id,
              issues: issues,
              date: moment(release.date).format("DD/MM/YYYY"),
              sources: release.link,
              version: release.version,
            };

            this.releases.push(result);
          });
        });
      });
    },
    async getIssueId(issue) {
      const response = await this.axios.get(
        `${this.$proxyIssues}/issues/${issue}`
      );
      return response.data.title;
    },
    editItem(item) {
      this.editedIndex = this.releases.indexOf(item);
      this.release = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.releases.indexOf(item);
      this.release = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.axios.delete(`${this.$proxyReleases}/releases/${this.release.id}`)
      .then(()=> {
        this.initialize();
      });
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.release = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.release = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      const releaseToSave ={
        date: this.date,
        issues: this.issues.map(issue=> issue.id),
        link: this.release.sources,
        name: this.releaseName,
        version:this.createNewVersion()
      }
      console.log(releaseToSave);
      this.axios.post(`${this.$proxyReleases}/releases/`,releaseToSave)
      .then(()=> this.initialize());
      this.close();
    },
    createNewVersion(){
      const regex = new RegExp(/v(\d).(\d).(\d)/);
      let major = this.lastVersion.replace(regex,'$1');
      let minor = this.lastVersion.replace(regex,'$2');
      let patch = this.lastVersion.replace(regex,'$3');
      switch (this.version) {
        case "Major":
          
          major = `${parseInt(major)+1}`;
          break;
        case "Minor":
          minor = `${parseInt(minor)+1}`;
          break;
        case "Patch":
          patch = `${parseInt(patch)+1}`;
          break;
      
        default:
          break;
      }
      const result = `v${major}.${minor}.${patch}`;
      return result;
    }
  },
};
</script>