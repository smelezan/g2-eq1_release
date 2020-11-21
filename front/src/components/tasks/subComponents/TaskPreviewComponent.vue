<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{title}}   <span class= "text-right">⚠</span></h5>
      </div>
      <button class="btn btn-danger" @click.stop="deleteTask"> Supprimer</button>
    </div>
</template>



<script>
export default {
    name: "TaskPreviewComponent",
    props:{
        id : String,
        title: String,
        status: Boolean,
        warnings:[String]
    },
    methods:{
      deleteTask(){
        this.$emit("delete-task", { 
          id: this.id
        });
      }
    }
}
</script>