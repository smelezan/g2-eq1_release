<template>
  <div class="card">
    <div v-if="status=='DONE'">
      <div class="DONE">
        <div class="card-body">
          <h5 class="card-title">{{title}}  <span class= "text-right">⚠</span></h5>
        </div>
        <router-link :to="`tasks/${id}`"> <button class="btn btn-primary" >Détail</button> </router-link>
        <br>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Supprimer la tâche
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Supprimer la tâche</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    Voulez vous supprimer la tâche?
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false" @click.stop="deleteTask()">
                Supprimer
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Annuler
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div v-if="status!='DONE'">
      <div class="NDONE">
        <div class="card-body">
          <h5 class="card-title">{{title}}   <span class= "text-right">⚠</span></h5>
        </div>
        <router-link :to="`tasks/${id}`"> <button class="btn btn-primary" >Détail</button> </router-link>
        <br>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Supprimer la tâche
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Supprimer la tâche</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    Voulez vous supprimer la tâche?
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false" @click.stop="deleteTask()">
                Supprimer
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Annuler
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>



<script>
export default {
    name: "TaskPreviewComponent",
    props:{
        id : String,
        title: String,
        warnings:[String],
        status:String
    },
    data(){
      return{
          dialog:false,
      }
    },
    methods:{
        deleteTask: function(){
            this.axios.delete(this.$proxyTasks+'/tasks/'+this.id)
            .then(()=> window.location.reload())
        }
    }
}
</script>

<style>
.DONE{
  background-color: rgb(48, 226, 48);
  border: 5px;
}
.NDONE{
  background-color: rgb(194, 190, 190);
  border: 5px;
}
</style>