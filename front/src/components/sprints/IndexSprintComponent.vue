<template>
  <v-app id="inspire">
    <v-card>
      <v-main>
        <h1>Vous voulez réorganiser vos sprints ?</h1>
        <v-row>
          <v-col md="6">
            <AddSprintModaleComponent />
          </v-col>
          <v-col md="5">
            <v-row>
              <v-btn color="success" @click="updateSprints">
                Sauvegarder
              </v-btn>
              <v-btn color="error" @click="cancelModification"> Annuler </v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="5" style="margin-left: 2%">
            <h3>Non Assignés</h3>
            <v-row>
              <draggable
                class="list-group"
                :list="unasignedIssues"
                group="issues"
                @change="log($event, 1)"
              >
                <div v-for="issue in unasignedIssues" :key="issue">
                  <IssueItemComponent :id="issue" />
                </div>
              </draggable>
            </v-row>
            <v-row> </v-row>
          </v-col>
          <v-col md="5" style="margin-right: 2%">
            <h3>Sprints</h3>
            <div
              v-for="(sprint, counter) in sprints"
              :key="sprint._id"
              style="margin-bottom: 5%"
            >
              <v-spacer></v-spacer>
              <v-card color="grey lighten-3">
                <v-card-title> Sprint {{ counter + 1 }} </v-card-title>

                <draggable
                  class="list-group"
                  :list="sprint.issues"
                  group="issues"
                  @change="log($event, 1)"
                >
                  <div
                    v-for="issue in sprint.issues"
                    :key="issue"
                    style="margin: 2%"
                  >
                    <IssueItemComponent :id="issue" />
                  </div>
                </draggable>
                <v-card-subtitle>
                  {{ dateParser(sprint.startDate) }} ->
                  {{ dateParser(sprint.endDate) }}
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    color="error"
                    rounded
                    @click="deleteSprint(sprint._id)"
                  >
                    Supprimer
                  </v-btn>
                </v-card-actions>
              </v-card>
              <v-spacer></v-spacer>
            </div>
          </v-col>
        </v-row>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import draggable from "vuedraggable";
import IssueItemComponent from "./subComponents/IssueItemComponent";
import moment from "moment";
import AddSprintModaleComponent from "./subComponents/AddSprintModaleComponent";
export default {
  components: {
    IssueItemComponent,
    draggable,
    AddSprintModaleComponent,
  },

  data() {
    return {
      sprint: false,
      issues: [],
      sprints: [],
      unasignedIssues: [],
    };
  },
  computed: {},

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