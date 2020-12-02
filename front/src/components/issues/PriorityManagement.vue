<template>
  <v-container style="margin-top: 300px; margin-left: 300px">
    <v-row>
      <v-col>
        <h3 align="center">Non assignés</h3>
        <draggable
          v-model="unassignedIssues"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <div v-for="issue in unassignedIssues" :key="issue.id">
            <issueSummary :title="issue.title" :priority="issue.priority" />
          </div>
        </draggable>
      </v-col>

      <v-col v-for="priority in prioritiesList" :key="priority.priority">
        <h3 align="center">{{ priority.priority }}</h3>
        <div>
          <draggable
            v-model="priority.issues"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
            <div v-for="issue in priority.issues" :key="issue.id">
              <issueSummary
                :title="issue.title"
                :priority="priority.priority"
              />
            </div>
          </draggable>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="right">
        <v-btn @click="applyChanges" color="primary">Appliquer</v-btn>
        <v-btn @click="cancelChanges" color="error">Annuler</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import draggable from "vuedraggable";
import issueSummary from "./subComponents/IssueSummary";

export default {
  name: "PriorityManagement",
  order: 1,
  components: {
    draggable,
    issueSummary,
  },
  data() {
    return {
      unassignedIssues: [],
      prioritiesList: [
        {
          priority: "HIGH",
          issues: [],
        },
        {
          priority: "MEDIUM",
          issues: [],
        },
        {
          priority: "LOW",
          issues: [],
        },
      ],
    };
  },
  created() {
    this.axios.get(this.$proxyIssues + "/issues").then((response) => {
      let issues = response.data;
      this.sortIssues(issues);
    });
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    applyChanges: function () {
      //Envoyer au serveur  d'issues  la liste.
      this.axios
        .put(this.$proxyIssues + "/issues/managePriority", {
          priorityList: this.prioritiesList,
        })
        .then(() => {});
    },
    sortIssues: function (issues) {
      for (let issue of issues) {
        //window.console.log(issue);
        if (
          issue.priority == undefined ||
          issue.priority == null ||
          issue.priority == ""
        ) {
          this.unassignedIssues.push(issue);
        } else {
          let priority = this.prioritiesList.find(
            (element) => element.priority === issue.priority
          );
          priority.issues.push(issue);
        }
      }
    },
    cancelChanges: function () {
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.unassignedIssues = [];
        this.prioritiesList = [
          {
            priority: "HIGH",
            issues: [],
          },
          {
            priority: "MEDIUM",
            issues: [],
          },
          {
            priority: "LOW",
            issues: [],
          },
        ];
        let issues = response.data;
        this.sortIssues(issues);
      });
    },
  },
};
</script>