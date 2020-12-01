<template>
  <div class="row justify-content-center" >
    <div class="col-md-8" style="margin-top: 100px;margin-left: 300px;">
      <div class="container">
        <div class="progress-bar">
          <v-card>
            <v-card-title><span class="headline" style="centered">Avancement</span></v-card-title>
            <v-progress-linear v-model="progress" color="green"></v-progress-linear>
          </v-card>
        </div>
        <br>
        <h3>Index Task : <span> <v-btn class="btn btn-primary" to="/create-task" >Ajouter une Task</v-btn> </span> </h3>
        <div class="row" v-for="task in tasks" :key="task._id">
          <div class="col-8">
            <TaskPreviewComponent :id ="task._id" :title="task.title" :status="task.status"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TaskPreviewComponent from "./subComponents/TaskPreviewComponent";
export default {
  data(){
      return{
          tasks:[],
          total:0,
          done:0,
          progress:0
      }
  },
  components: {
    TaskPreviewComponent,
  },
  created() {
      this.axios.get(this.$proxyTasks+'/tasks').then(response =>{
          this.tasks = response.data;
          this.tasks.forEach(task => {
            if(task.status == "DONE"){
              this.done++;
            }
            this.total++;
          });
          this.progress = (this.done/this.total)*100;
      });
  },
}
</script>