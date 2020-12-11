<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" dark v-bind="attrs" v-on="on">
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
            <v-btn color="blue darken-1" text @click.stop="dialog = false" @click="deleteIssue">
                Supprimer
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
                Annuler
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>



<script>
export default {
    name: "DeleteTaskButtonComponent",
    props:{
        id:String
    },
    data(){
      return{
          dialog:false,
          issues:[],
          index:0,
      }
    },
    methods:{
        deleteIssue: function(){
            this.axios.get(this.$proxyIssues + "/issues").then((response) => {
              this.issues = response.data;
              console.log(this.issues);
              this.issues.forEach(issue => {
                if(issue.tasks.indexOf(this.id) != -1){
                  this.index = issue.tasks.indexOf(this.id);
                  issue.tasks.splice(this.index,1);
                  this.axios.put(this.$proxyIssues+'/issues/'+issue._id,issue);
                }
              });
            });
            this.axios.delete(this.$proxyTasks+'/tasks/'+this.id)
            .then(()=> window.location.reload())
        }
    }
}
</script>
