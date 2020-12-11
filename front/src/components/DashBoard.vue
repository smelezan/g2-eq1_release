<template>
  <div>
    <div style="display:table" >
      <div style="display: table-row">
        <div style="display: table-cell">
        <router-link to="/tests">
          <v-btn color="primary" dark class="mb-2"> Ajouter des tests</v-btn>
        </router-link>
        </div>
        
        <div style="display: table-cell" @click="openHelp()" class="mx-auto">
          <v-tooltip bottom  >
            <template v-slot:activator="{ on, attrs }">
              <v-icon 
              v-bind="attrs"
              v-on="on"
              color="grey"
              style=" position:relative; bottom:3px; left:5px"
              >help_outline</v-icon>
            </template>
            <span>aide</span>
          </v-tooltip>
          </div>
      </div>
    </div>

    <div class="text-center">
      <v-dialog
        v-model="help"
        width="500"
      >

        <v-card>
          <v-card-title class="headline grey lighten-2">
            Aide
          </v-card-title>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="help = false"
            >
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>


    <v-data-table
      :headers="headers"
      :items="tests"
      class="elevation-1"
      :calculate-widths="true"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Dashboard</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="['issues', 'tâches']"
                        label="issues"
                        return-object
                        single-line
                        @change="updateSelection"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                      <v-select
                        v-if="issueChosen"
                        v-model="selectedDependance"
                        :items="issues"
                        item-text="title"
                        return-object
                        single-line
                      ></v-select>
                      <v-select
                        v-else
                        v-model="selectedDependance"
                        :items="tasks"
                        item-text="title"
                        return-object
                        single-line
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="12">
                      <v-textarea
                        v-model="test.description"
                        label="description"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Etes vous sûr de vouloir le supprimer?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Annuler</v-btn
                >
                <v-btn color="red darken-1" text @click="deleteItemConfirm"
                  >Supprmier</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>


<script>
import moment from "moment";
export default {
  data: () => ({
    issueChosen: true,
    selectedDependance: {},
    issues: [],
    tasks: [],
    tests: [],
    dialog: false,
    help: false,
    dialogDelete: false,
    headers: [
      {
        text: "Dépendance",
        align: "start",
        sortable: false,
        value: "dependance",
      },
      { text: "description", value: "description" },
      { text: "date", value: "date" },
      { text: "result ", value: "result" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    test: {
      id: "",
      description: "",
      dependance: "",
      type: "",
      result: "",
      date: "",
    },
    defaultTest: {
      id: "",
      description: "",
      dependance: "",
      type: "",
      result: "",
      date: "",
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

  created() {
    this.initialize();
    this.axios.get(`${this.$proxyIssues}/issues`).then(
      (response) =>
        (this.issues = response.data.map((issue) => {
          return {
            title: issue.title,
            id: issue._id,
          };
        }))
    );
    this.axios.get(`${this.$proxyTasks}/tasks`).then(
      (response) =>
        (this.tasks = response.data.map((task) => {
          return {
            title: task.title,
            id: task._id,
          };
        }))
    );
  },

  methods: {
    openHelp: function() {
      this.help = !this.help
    },
    updateSelection(event) {
      this.issueChosen = event == "issues";
    },
    initialize() {
      this.tests = [];
      this.axios.get(`${this.$proxyTests}/tests`).then((response) => {
        const promises = response.data.map(
          (test) =>
            new Promise((resolve) => {
              this.getDependanceName(test).then((dependanceName) => {
                let newTest = {
                  id: test._id,
                  description: test.description,
                  dependance: dependanceName,
                  type: test.type,
                  result: test.testedDates[test.testedDates.length - 1].result,
                  date: moment(
                    test.testedDates[test.testedDates.length - 1].date
                  ).format("YYYY-MM-DD"),
                };
                this.tests.push(newTest);
                resolve(newTest);
              });
            })
        );
        Promise.all(promises).catch(() => console.log("EROOR"));
      });
    },
    getDependanceName(test) {
      return new Promise((resolve) => {
        if (test.dependance.length === 0) {
          resolve("");
        } else {
          if (test.dependance[0] === null) resolve("");
          else if (test.type === "E2E") {
            this.axios
              .get(this.$proxyIssues + "/issues/" + test.dependance[0])
              .then((response) => resolve(response.data.title));
          } else {
            this.axios
              .get(this.$proxyTasks + "/tasks/" + test.dependance[0])
              .then((response) => {
                if (response.data) resolve(response.data.title);
              });
          }
        }
      });
    },

    editItem(item) {
      this.editedIndex = this.tests.indexOf(item);
      this.test = Object.assign({}, item);
      console.log(this.test);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.tests.indexOf(item);
      this.test = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.axios
        .delete(`${this.$proxyTests}/tests/${this.test.id}`)
        .then(() => this.initialize());
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.test = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.test = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      console.log(this.test);
      let result = {
        dependance: [this.selectedDependance.id],
        description: this.test.description,
        type: this.issueChosen ? "E2E" : "Unitaire",
      };
      console.log(`Object to send: \n ${{ ...result }}`);
      console.log(result);
      this.axios
        .put(`${this.$proxyTests}/tests/${this.test.id}`, {
          ...result,
        })
        .then(() => this.initialize());

      //
      this.close();
    },
  },
};
</script>