<template>

    <div class="container">
        <h3>Index Issue   <span> <router-link to="/create-issue"> <button class="btn btn-primary">Ajouter une Issue</button> </router-link></span></h3> 

        <div class="row" v-for="issue in issues" :key="issue._id">
            <div class="col-4">
                <IssuePreviewComponent :title="issue.title" :progression=50 />
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