<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}   <span class= "text-right">⚠</span></h5>
        <div class="progress text-right ">
            <div class="progress-bar" role="progressbar" :style="'width: '+progress+'%'" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <button class="btn btn-danger" @click.stop="deleteIssue"> Supprimer</button>
      </div>
    </div>
</template>



<script>
export default {
    name: "IssuePreviewComponent",
    props:{
        id: String,
        title: String,
        progression: Number,
        warnings:[String]
    },
    data() {
      return {
        progress : 0
      }

    },

    created: function(){
      this.axios.get(this.$proxyTasks+'/tasks/issues/'+this.id)
      .then(response =>{
        const tasks = response.data;
        console.log(tasks);
        let totalTasksComplete = 0;
        for(let task of tasks){
          if(task.status.toUpperCase() === 'DONE') totalTasksComplete ++;
        }
        if(tasks !=[]){
          this.progress = totalTasksComplete*100 / tasks.length;
        }

      })
    },

    methods:{
      deleteIssue(){
        this.$emit("delete-issue", { 
          id: this.id
        });
      }
    }
}
</script>