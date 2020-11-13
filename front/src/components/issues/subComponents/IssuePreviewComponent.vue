<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}   <span class= "text-right">⚠</span></h5>
        <div class="progress text-right ">
            <div class="progress-bar" role="progressbar" :style="'width: '+progression+'%'" :aria-valuenow="progression" aria-valuemin="0" aria-valuemax="100"></div>
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
    methods:{
      deleteIssue(){
        this.$emit("delete-issue", { 
          id: this.id
        });
      }
    }
}
</script>