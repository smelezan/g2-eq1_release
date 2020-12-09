<template>
  <v-expansion-panels multiple>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col cols="4">{{ sprints.name }}</v-col>
          <v-col cols="8" class="text--secondary">
            <v-fade-transition leave-absolute>
              <v-progress-linear
                :value="progress"
                :buffered-value="bufferValue"
                color="green"
                background-color="grey"
                style="width: 50%"
                height="5"
                striped
              ></v-progress-linear>
            </v-fade-transition>
            <th style="position: absolute; bottom: 10%; left: 68%; top: 10%">
              début: {{ formatedStartDate }}
            </th>
            <th style="position: absolute; bottom: 10%; left: 68%; top: 60%">
              fin: {{ formatedendDate }}
            </th>
          </v-col>
        </v-row>
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <draggable
          class="list-group sprint-table"
          :list="sprints.issues"
          group="tasks"
          @change="updateSprint($event, sprints._id)"
        >
          <div v-for="issue in sprints.issues" :key="issue">
            <IssueItemComponent :id="issue" />
          </div>
          <!-- <ul
              class="sortable"
              :id="issue.id"
              v-for="issue in sprints.issues"
              :key="issue.title"
            >
              <li>{{ issue.title }}</li>
            </ul> -->
        </draggable>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>



<script>
import moment from "moment";
import draggable from "vuedraggable";
import IssueItemComponent from "../../sprints/subComponents/IssueItemComponent";
export default {
  name: "SprintComponent",
  components: {
    draggable,
    IssueItemComponent,
  },
  props: {
    sprints: Object,
    id: String,
    title: String,
    progression: Number,
    warnings: [String],
  },
  data() {
    return {
      bufferValue: 100,
      sprint: Array,
      progress: 0,
      issues: [],
      issue_name: [],
      issueId: String,
    };
  },
  computed: {
    formatedStartDate() {
      return moment(this.sprints.startDate).format("DD/MM/YYYY");
    },
    formatedendDate() {
      return moment(this.sprints.endDate).format("DD/MM/YYYY");
    },
  },
  mounted() {
    console.log("changments");
  },
  created() {
    /* var i;
       for (i in this.sprints){
        this.axios
        .get(this.$proxyIssues + "/issues/" + this.sprints[i])
        .then((response) => {/* 
            console.log(response.data.title) 
            this.issue_name.push(response.data.title);
        })
      }*/

    this.axios.get(this.$proxyIssues + "/issues").then((response) => {
      this.issues = response.data;
      this.issueToShow = (n, body = false) => {
        if (body) {
          this.show = false;
          return;
        }
        if (this.show) this.show = false;
        else {
          this.show = true;
          this.currentIssue = this.issues[n];
          return this.issues[n];
        }
      };

      this.updateProgression();
    });
  },

  methods: {
    deleteIssue() {
      this.$emit("delete-issue", {
        id: this.id,
      });
    },
    log: function (event) {
      console.log(event);
    },
    updateSprint(event, sprint_issues) {
      if (event.added != undefined) {
        this.axios
          .put(`${this.$proxyIssues}/sprints/addIssue/${sprint_issues}`, {
            issueId: event.added.element,
          })
          .then(() => this.updateProgression());
      } else if (event.removed != undefined) {
        this.axios
          .put(`${this.$proxyIssues}/sprints/removeIssue/${sprint_issues}`, {
            issueId: event.removed.element,
          })
          .then(() => this.updateProgression());
      }
    },
    async updateProgression() {
      let totalIssuesClosed = 0;
      for (let issue of this.sprints.issues) {
        let response = await this.axios.get(
          `${this.$proxyIssues}/issues/${issue}`
        );
        if (response.data.status === "CLOSED") totalIssuesClosed += 1;
      }
      if (this.sprints.issues.length === 0) this.progress = 0;
      else
        this.progress = (totalIssuesClosed * 100) / this.sprints.issues.length;
    },
  },
};
</script>