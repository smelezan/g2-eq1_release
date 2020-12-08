<template>
      <v-row >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
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
                    <v-icon class="stateIcon"
                      v-if="status!='DONE'"
                      v-bind="attrs"
                      v-on="on"
                    >mdi-progress-alert</v-icon>
                    <v-icon class="stateIcon"
                      v-else
                      v-bind="attrs"
                      v-on="on"
                      style="color:green"
                    >mdi-alert-circle-check-outline</v-icon>
                  </template>
                  <span v-if="status!='DONE'">issue ouverte</span>
                  <span v-else>issue terminée</span>
                </v-tooltip>
          {{title}}
        </a>
      </template>
      <v-card>
        <v-card-title>
          <a class="headline"
            style="font-family: 'roboto'; color:grey"
          ><h3>{{title}}</h3></a>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label=""
                  hint="Planification"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-autocomplete
                  :items="['HIGH', 'MEDIUM', 'LOW']"
                  :label=priority
                  hint="Priorité"
                  persistent-hint
                ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  :label=difficulty
                  hint="Difficulté"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :label=id
                  hint="Identifiant"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :label=description
                  hint="Description"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['Feature', 'Documentation']"
                  :label=type
                  hint="Type"
                  persistent-hint
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['TO DO', 'Doing', 'Done', 'Fermer']"
                  :label=etat
                  hint="État"
                  persistent-hint
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
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
    data: () => ({
      dialog: false,
    }),
  }
</script>