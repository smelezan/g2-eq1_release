<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Ajouter un sprint
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Créer un sprint</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-date-picker v-model="dates" range></v-date-picker>
              <v-text-field
                v-model="name"
                label="Nom"
                outlined
                :placeholder="name"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="dateRangeText"
                label="Date range"
                prepend-icon="event"
                readonly
                v-if="!overlay"
              ></v-text-field>
              <v-text-field
                v-model="dateRangeText"
                label="Date range"
                prepend-icon="event"
                readonly
                v-else
                error
                :rules="[rules.overlay]"
              ></v-text-field>
            </v-col>
            <v-col> </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.stop="createSprint">
          Créer
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Annuler
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import moment from "moment";
export default {
  name: "AddSprintModaleComponent",
  props: {},
  components: {},
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  data() {
    return {
      dialog: false,
      dates: [
        moment().format("YYYY-MM-DD"),
        moment().add(3, "days").format("YYYY-MM-DD"),
      ],
      name: "Sprint",
      overlay: false,
      rules: {
        overlay: () => "Vous ne pouvez pas superposer des sprints",
      },
    };
  },
  methods: {
    createSprint: function () {
      this.axios
        .post(this.$proxyIssues + "/sprints/", {
          startDate: new Date(this.dates[0]),
          endDate: new Date(this.dates[1]),
          name: this.name,
        })
        .then(() => window.location.reload())
        .catch(() => {
          console.log("ERREUR");
          this.overlay = true;
        });
    },
  },
};
</script>