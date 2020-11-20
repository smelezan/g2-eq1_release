<template>
  <div class="container-fluid">
    <div class="row">
        
      <div class="col-8" @click.stop="issueToShow(0,true)">
        <h3>
          Index Issue
          <span>
            <router-link to="/create-issue">
              <button class="btn btn-primary">Ajouter une Issue</button>
            </router-link>
          </span>
          <span>
            <router-link to="/manage-difficulty">
              <button class="btn btn-primary">Gérer la difficulté</button>
            </router-link>
          </span>
        </h3>

        <div class="row" v-for="(issue,index) in issues" :key="issue._id">
          <div class="col-8" @click.stop="issueToShow(index)">
            <IssuePreviewComponent :id ="issue._id" :title="issue.title" :progression="issue.progression" @delete-issue="deleteIssue" />
          </div>
        </div>
      </div>

      <div class="col-4" v-if="show">
          <IssueDetailComponent v-bind="currentIssue"/>
      </div>
      
    <modale :revele="revele" :toggleModale="toggleModale" :idIssue="idIssueToDelete"/>
    </div>
    
  </div>
</template>


<script>
import IssuePreviewComponent from "./subComponents/IssuePreviewComponent";
import IssueDetailComponent from "./subComponents/IssueDetailComponent";
import modale from "./modalComponent";
export default {
  data() {
    return {
        show: false,
      issues: [],
      currentIssue: {},
      issueToShow:{},
      revele:false,
      deleteIssue: (payload) =>{
          this.toggleModale(payload);
      },
      idIssueToDelete: ""
    };
  },
  components: {
    IssuePreviewComponent,
    IssueDetailComponent,
    modale
  },
  created() {
    
    this.axios.get(this.$proxyIssues + "/issues").then((response) => {
      this.issues = response.data;
      this.issueToShow=  (n,body=false)=>{
          if(body){
              this.show=false;
              return;
          }
          if(this.show) this.show=false;
          else{
              this.show= true;
              this.currentIssue=this.issues[n];
                console.log(this.currentIssue);
              return this.issues[n];
          } 
      };
    });
  },
  methods :{
      toggleModale : function(payload=undefined){
          this.revele = !this.revele;
          if(payload!==undefined){
              this.idIssueToDelete = payload.id;
          }
      }
  }
};
</script>