<template>
  <v-container style="
    margin-top: 200px;
    margin-left: 300px;
  ">
      <h1>Sprints</h1>
        <v-row>
          <v-col md="10"></v-col>
          <v-col md="2">
            <v-btn color="primary" @click="sprint=!sprint">Ajouter un Sprint</v-btn >
          </v-col>
        </v-row>
        <div v-for="(sprint,counter) in newSprints" :key="sprint._id" >
          <v-row>
            <v-card>
              <v-card-title>
                {{counter}}
              </v-card-title>
              <v-card-text>
                <draggable
                  v-model="sprint.issues"
                  group="people"
                  @change="log($event,counter)"
                >
                  <div v-for="(issue,counter) in sprint.issues" :key="counter">
                      <IssueItemComponent v-if="issue._id === undefined" :id="issue"/>
                      <IssueItemComponent v-else :id="issue._id"/>
                  </div>
                </draggable>
                
              </v-card-text>
            </v-card>
          </v-row>
        </div>
        <v-row>  
          <div v-if="!sprint">
            
            <h3> Non assignées</h3>
            <draggable
              v-model="issues"
              group="people"
              @change="log($event,1)"
            >
              <div v-for="issue in unasignedIssues" :key="issue._id" >
                <IssueSummary :title="issue.title"/>
              </div>
            </draggable>
          </div>
          <DatePicker v-if="sprint" @values="viewUpdate($event)" />
        </v-row>
  </v-container>
</template>

<script>
  import DatePicker from "../Shared/DatePicker";
import draggable from "vuedraggable";
  import IssueItemComponent from "./subComponents/IssueItemComponent";
  import IssueSummary from "../issues/subComponents/IssueSummary"
  export default {
      components : {
        DatePicker,
        IssueItemComponent,
        draggable,
        IssueSummary
      },

      data() {
        return {
          sprint : false,
          issues : [],
          sprints:[],
          newSprints:[],
          unasignedIssues:[],
        }
      },

      methods: {
        viewUpdate(data) {
          console.log(data);
          this.sprint=!this.sprint;
        },
        log(event,id){
          console.log(event);
          console.log(id);
        },
        sortIssues(issues){
          console.log("sorting");
          this.unasignedIssues=[];
          for(const issue of issues){
            let issueFound =false
            for(const sprint of this.sprints){
              issueFound = sprint.issues.some(issueOfSprint=>{
                return issueOfSprint === issue._id;
              })
              if(issueFound) break;
            }
            if(!issueFound) {
                this.unasignedIssues.push(issue);
            }
          }
        }
      },

      created() {
      this.axios.get(this.$proxyIssues+'/sprints')
        .then(response =>{
          this.sprints = response.data;
          this.newSprints= [...this.sprints];
          console.log(this.sprints);
          this.axios.get(this.$proxyIssues+'/issues')
            .then(response=>{
              this.issues = response.data;
              this.sortIssues(this.issues);
              console.log(this.unasignedIssues);
            })
        })

    }
  }
</script>