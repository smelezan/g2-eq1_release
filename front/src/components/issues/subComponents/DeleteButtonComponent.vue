<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="error" dark v-bind="attrs" v-on="on">
            Supprimer l'issue
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="headline">Supprimer l'issue</span>
            </v-card-title>
            <v-card-text>
            <v-container>
                <v-row>
                <v-col cols="12">
                    Voulez vous supprimer l'issue?
                </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false" @click.stop="deleteIssue">
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
    name: "DeleteButtonComponent",
    props:{
        id:String
    },
    data(){
      return{
          dialog:false,
      }
    },
    methods:{
        deleteIssue: function(){
            this.axios.delete(this.$proxyIssues+'/issues/'+this.id)
            .then(()=> window.location.reload())
        }
    }
}
</script>
