<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <a
          style="text-decoration: none; color: black"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="stateIcon"
                v-if="status == ('TO DO' || 'DOING')"
                v-bind="attrs"
                v-on="on"
                >mdi-progress-alert</v-icon
              >
              <v-icon
                class="stateIcon"
                v-if="status == 'DONE'"
                v-bind="attrs"
                v-on="on"
                style="color: grey"
                >mdi-alert-circle-check-outline</v-icon
              >
              <v-icon
                class="stateIcon"
                v-if="status == 'CLOSED'"
                v-bind="attrs"
                v-on="on"
                style="color: green"
                >mdi-alert-circle-check-outline</v-icon
              >
            </template>
            <span v-if="status == ('TO DO' || 'DOING')">issue ouverte</span>
            <span v-if="status == 'DONE'">issue terminée</span>
            <span v-else>issue fermée</span>
          </v-tooltip>
          {{ title }}
        </a>
      </template>
      <v-card>
        <v-card-title>
          <a class="headline" style="font-family: 'roboto'; color: grey"
            ><h3>{{ title }}</h3></a
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-autocomplete
                  :items="['HIGH', 'MEDIUM', 'LOW']"
                  v-model="newPriority"
                  hint="Priorité"
                  persistent-hint
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="newDifficulty"
                  hint="Difficulté"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :label="id"
                  hint="Identifiant"
                  persistent-hint
                  disabled
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  hint="Description"
                  v-model="newDescription"
                  persistent-hint
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Feature', 'Documentation']"
                  v-model="newType"
                  hint="Type"
                  persistent-hint
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['TO DO', 'DOING', 'DONE', 'CLOSED']"
                  v-model="newState"
                  hint="État"
                  persistent-hint
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Annuler
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="
              updateIssue();
              dialog = false;
            "
          >
            Sauvegarder
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    title: String,
    status: String,
    id: String,
    priority: String,
    difficulty: Number,
    description: String,
    etat: String,
    type: String,
  },
  data() {
    return {
      newType: this.type,
      newPriority: this.priority,
      newTitle: this.title,
      newDescription: this.description,
      newState: this.etat,
      newDifficulty: this.difficulty,
      dialog: false,
      updateIssue: () => {
        let issue = {
          type: this.newType,
          priority: this.newPriority,
          title: this.newTitle,
          description: this.newDescription,
          status: this.newState,
          difficulty: this.newDifficulty.toString(),
        };
        this.axios.put(this.$proxyIssues + "/issues/" + this.id, issue);
      },
    };
  },
};
</script>