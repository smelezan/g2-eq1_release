<template>
  <v-data-table :headers="headers" :items="releases" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Releases</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
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
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
                      :items="['patch', 'Minor', 'Major']"
                      label="version"
                      return-object
                      single-line
                      @change="log"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
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
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="release.issues"
                      label="issues"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="release.versions"
                      label="version"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="release.date"
                      label="date"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="release.sources"
                      label="sources"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Êtes vous sur de vouloir supprimer cet élément?</v-card-title
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
    <template v-slot:item.actions="{ item }">
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    dialog: false,
    modal: false,
    dialogDelete: false,
    headers: [
      {
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
      issues: [],
      version: "",
      date: "",
      sources: "",
    },
    defaultItem: {
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
  created() {
    this.initialize();
  },

  methods: {
    log(event) {
      console.log(event);
    },
    initialize() {
      console.log("OK");
      this.releases = [
        {
          issues: ["blbalbab"],
          date: new Date().toString(),
          sources: "http:github.com",
          version: "v1.0.0",
        },
      ];
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
      this.releases.splice(this.editedIndex, 1);
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
      if (this.editedIndex > -1) {
        Object.assign(this.releases[this.editedIndex], this.release);
      } else {
        this.releases.push(this.release);
      }
      this.close();
    },
  },
};
</script>