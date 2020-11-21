<template>

    <div class="container">
        <h3>Index Task   <span> <router-link to="/create-task"> <button class="btn btn-primary">Ajouter une Task</button> </router-link></span></h3>   
        <div class="row" v-for="task in tasks" :key="task._id">
          <div class="col-8">
            <TaskPreviewComponent :id ="task._id" :title="task.title" @delete-task="deleteTask"/>
          </div>
        </div>
        
      <modaleTask :revele="revele" :toggleModale="toggleModale" :idTask="idTaskToDelete"/>
    </div>
</template>


<script>
import TaskPreviewComponent from "./subComponents/TaskPreviewComponent";
import modaleTask from "./subComponents/taskModalComponent";
export default {
  data(){
      return{
          tasks:[],
          revele:false,
          deleteTask: (payload) =>{
              this.toggleModale(payload);
          },
          idTaskToDelete: ""
      }
  },
  components: {
    TaskPreviewComponent,
    modaleTask
  },
  created() {
      this.axios.get("http://localhost:5000/tasks").then((response) => {
          this.tasks = response.data;
      });
  },
  methods :{
      toggleModale : function(payload=undefined){
          this.revele = !this.revele;
          if(payload!==undefined){
              this.idTaskToDelete = payload.id;
          }
      }
  }
}
</script>