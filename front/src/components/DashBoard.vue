<template>
  <v-container>
    <router-link to="/tests">
      <v-btn color="primary" dark class="mb-2"> Ajouter des tests</v-btn>
    </router-link>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Dashboard</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template> </template>
            <v-card>
              <v-card-title>
                <span class="headline">Modifier le test</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="nom"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="user stories liées"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="derniere execution"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="nombre d'éxécution"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="résultats"
                      ></v-text-field>
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
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-card> Aucune données dans la base </v-card>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "description",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "user stories liées", value: "UserStoriesLiees" },
      { text: "dernière exécution", value: "derniereExecution" },
      { text: "nombre d'exécution", value: "nbExecution" },
      { text: "état", value: "etat" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
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
    initialize() {
      this.axios
        .get(this.$proxyTests + "/tests/")
        .then((response) => {
          const tests = response.data;
          const promise = tests.map(
            (test) =>
              new Promise((resolve) => {
                this.getDependanceName(test).then((response) => {
                  const object = {
                    name: test.description,
                    derniereExecution:
                      test.testedDates.length === 0
                        ? ""
                        : test.testedDates[test.testedDates.length - 1].date,
                    nbExecution: test.testedDates.length,
                    etat:
                      test.testedDates.length === 0
                        ? "aucun"
                        : test.testedDates[test.testedDates.length - 1].date,
                    UserStoriesLiees: response,
                  };
                  resolve(object);
                });
              })
          );
          Promise.all(promise).then((response) => {
            console.log(response);
            this.desserts = response;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getDependanceName(test) {
      return new Promise((resolve) => {
        if (test.dependance.length === 0) {
          resolve("");
        } else {
          if (test.type === "E2E") {
            this.axios
              .get(this.$proxyIssues + "/issues/" + test.dependance[0])
              .then((response) => resolve(response.data.title));
          } else {
            this.axios
              .get(this.$proxyTasks + "/tasks/" + test.dependance[0])
              .then((response) => resolve(response.data.title));
          }
        }
      });
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>