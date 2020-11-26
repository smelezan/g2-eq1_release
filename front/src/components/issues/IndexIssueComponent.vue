<template>
  <v-container style="
    margin-top: 200px;
    margin-left: 300px;
">
    <v-row>
        
      <v-col cols="8" @click.stop="issueToShow(0,true)">
        <h3>
          Index Issue
          <span>
            <router-link to="/create-issue">
              <v-btn >Ajouter une Issue</v-btn>
            </router-link>
          </span>
          <span>
            <router-link to="/manage-difficulty">
              <v-btn>Gérer la difficulté</v-btn>
            </router-link>
          </span>
        </h3>

        <v-row v-for="(issue,index) in issues" :key="issue._id">
          <v-col cols="8" @click.stop="issueToShow(index)">
            <IssuePreviewComponent :id ="issue._id" :title="issue.title" :progression="issue.progression" @delete-issue="deleteIssue" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4" v-if="show">
          <IssueDetailComponent v-bind="currentIssue"/>
      </v-col>
      
    <modale :revele="revele" :toggleModale="toggleModale" :idIssue="idIssueToDelete"/>
    </v-row>
    
  </v-container>
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