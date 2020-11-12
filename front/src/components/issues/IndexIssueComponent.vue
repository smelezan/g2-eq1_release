<template>

    <div class="container">
        <h3>IndexIssue   <span> <router-link to="/"> <button class="btn btn-primary">Ajouter une Issue</button> </router-link></span></h3> 

        <div class="row" v-for="issue in issues" :key="issue._id">
            <div class="col-4">
                <IssuePreviewComponent :title="issue.title" :progression=issue.progression />
            </div>
        </div>        
    </div>
</template>


<script>
import IssuePreviewComponent from './IssuePreviewComponent';
export default {
    data(){
        return{
            issues:[]
        }
    },
    components:{
        IssuePreviewComponent
    },
    created(){
      this.axios.get(this.$proxy+'/issues').then(response =>{
          this.issues = response.data;
          window.console.log(this.issues);
      });
    }
}
</script>