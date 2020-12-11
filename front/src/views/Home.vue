<template>
  <v-app id="inspire">

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="(project, i) in projects" :key="i"
          cols="3"
          >
          <component :is="ProjectTile" :Project_Name="project.project.name">
          </component>
        </v-col>
          <v-col
          cols="3"
          >
            <v-card 
              @click="increaseNbProjects()" 
              >
              <v-layout justify-center style="height:200px" >

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                    >mdi-plus</v-icon>
                  </template>
                  <span>Cliquer ici pour créer un nouveau projet !</span>
                </v-tooltip>
                
              </v-layout>
            </v-card>
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
                v-model="inputValue"
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
            @click="addProject($event), dialog = false"

          >
            Valider
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  </v-app>
</template>

<script>
  import ProjectTile from '@/components/ProjectTile'
  export default {
    data() {
      return {
        ProjectTile,
        dialog: false,
        projects: [
          {'project':{'name': 'Projet CDP'}}
        ],
        inputValue: null
      }
    },
    methods: {
      increaseNbProjects: function() {
        this.dialog = !this.dialog
      },
      addProject: function() {
        this.projects.push({'project':{'name': this.inputValue}})
      }
    }
    //
  }
</script>