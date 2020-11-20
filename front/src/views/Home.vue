<template>
  <v-app id="inspire">

    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in nb_projects"
            :key="n"
            cols="4"
          >
            <v-card v-if="n==nb_projects" @click="increaseNbProjects()" height="200">
              <v-layout justify-center style="height:100%">

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      color="black"
                    >mdi-plus</v-icon>
                  </template>
                  <span>Cliquer ici pour créer un nouveau projet !</span>
                </v-tooltip>
                
              </v-layout>
            </v-card>
            <v-card v-else-if="n>0" height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">
          Créer un projet
        </v-card-title>

        <v-container fluid>
          <v-row>
            <v-col
            cols="12"
            sm="12"
            >
             <v-text-field
                counter="20"
                label="Nom"
                outlined
              ></v-text-field>

              <v-textarea
                label="Description"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        nb_projects: 1,
        dialog: false,
      }
    },
    methods: {
      increaseNbProjects: function() {
        //this.nb_projects += 1
        this.dialog = !this.dialog
      }
    }
    //
  }
</script>