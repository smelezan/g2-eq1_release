<template>

    <div class="container">
        <h3>Index Task   <span> <router-link to="/create-task"> <button class="btn btn-primary">Ajouter une Task</button> </router-link></span></h3> 

        <div class="row" v-for="task in task" :key="task._id">
            <div class="col-4">
                <TaskPreviewComponent :title="task.title" />
            </div>
        </div>        
    </div>
</template>


<script>
import TaskPreviewComponent from './TaskPreviewComponent';
export default {
    data(){
        return{
            tasks:[]
        }
    },
    components:{
        TaskPreviewComponent
    },
    created(){
      this.axios.get(this.$proxy+'/tasks').then(response =>{
          this.tasks = response.data;
          window.console.log(this.tasks);
      });
    }
}
</script>