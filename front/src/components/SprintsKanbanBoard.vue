<template>
  <div>
    <div class="row mt-5">
      <v-col md="5">
      <h3>Issues non assignés</h3>
      </v-col>
    </div>
    <div 
      class="container-fluid" 
      style="display: flex; overflow-x: auto;"
      >
      <v-row>
        <draggable 
          class="row"
          :list="unasignedIssues"
          group="issues"
          @change="log($event, 1)"
        >
          <div class="col" v-for="issue in unasignedIssues" :key="issue">
            <IssueItemComponent :id="issue" />
          </div>
        </draggable>
      </v-row>
    </div>
    <div class="row mt-5">
        <v-col v-for="(item, i) in list" :key="i">
            <component :is=Board :board_name="list[i]"></component>
        </v-col>
    </div>
  </div>
</template>

<script>
import Board from "./SprintsBoard";
import draggable from "vuedraggable";
import IssueItemComponent from "./sprints/subComponents/IssueItemComponent";
import moment from "moment";
import AddSprintModaleComponent from "./sprints/subComponents/AddSprintModaleComponent";
export default {
  components: {
    IssueItemComponent,
    draggable,
    AddSprintModaleComponent,
  },
  data() {
    return {
        list: [
          {name:'',number:'0',route:'/sprints',action:'/create-issue', proxy:this.$proxyIssues}, 
          ],
        Board,
        sprint: false,
        issues: [],
        sprints: [],
        unasignedIssues: [],
    };
  },
    methods: {
    log(event, id) {
      console.log(event);
      console.log(id);
    },
    sortIssues(issues) {
      this.unasignedIssues = [];
      for (const issue of issues) {
        let issueFound = false;
        for (const sprint of this.sprints) {
          issueFound = sprint.issues.some((issueOfSprint) => {
            return issueOfSprint === issue._id;
          });
          if (issueFound) break;
        }
        if (!issueFound) {
          this.unasignedIssues.push(issue._id);
        }
      }
    },
    sortSprints() {
      this.sprints.sort(function (a, b) {
        console.log(moment(a.startDate).isBefore(b.startDate));
        return moment(a.startDate).isBefore(b.startDate) ? -1 : 1;
      });
    },
    dateParser(date) {
      return moment(date).format("DD MM YYYY");
    },
    updateSprints() {
      this.axios.put(this.$proxyIssues + "/sprints/reatribute", {
        sprints: this.sprints,
      });
    },
    cancelModification() {
      this.axios.get(this.$proxyIssues + "/sprints").then((response) => {
        this.sprints = response.data;
        this.axios.get(this.$proxyIssues + "/issues").then((response) => {
          this.issues = response.data;
          this.sortIssues(this.issues);
          this.sortSprints();
        });
      });
    },
    deleteSprint(id) {
      this.axios.delete(this.$proxyIssues + "/sprints/" + id).then(() => {
        this.cancelModification();
      });
    },
  },
  created() {
    this.axios.get(this.$proxyIssues + "/sprints").then((response) => {
      this.sprints = response.data;
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.issues = response.data;
        this.sortIssues(this.issues);
        this.sortSprints();
      });
    });
  },
};
</script>