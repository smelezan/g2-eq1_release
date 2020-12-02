<template>
  <div class="card">
    <div v-if="status=='DONE'">
      <v-card class="DONE" color="green">
        <v-card-title>{{title}}   <span class= "text-right">⚠</span></v-card-title>
        <v-card-actions >
          <v-btn class="btn btn-primary" :to="`tasks/${id}`" color="blue">Détail</v-btn>
          <DeleteTaskButtonComponent :id='id'/>
        </v-card-actions>
      </v-card>
    </div>
    <div v-if="status!='DONE'">
      <v-card class="NDONE" color="grey">
        <v-card-title>{{title}}   <span class= "text-right">⚠</span></v-card-title>
        <v-card-actions >
          <v-btn class="btn btn-primary" :to="`tasks/${id}`" color="blue">Détail</v-btn>
          <DeleteTaskButtonComponent :id='id'/>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>



<script>
import DeleteTaskButtonComponent from './DeleteTaskButtonComponent';
export default {
    name: "TaskPreviewComponent",
    props:{
        id : String,
        title: String,
        warnings:[String],
        status:String
    },
    components:{
      DeleteTaskButtonComponent
    },
    data(){
      return{
          dialog:false,
      }
    }
}
</script>
