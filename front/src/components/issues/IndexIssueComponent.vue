<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="8" @click.stop="issueToShow(0, true)">
            <h3>
              Index Issue
              <span>
                <router-link to="/create-issue">
                  <v-btn>Ajouter une Issue</v-btn>
                </router-link>
              </span>
              <span>
                <router-link to="/manage-difficulty">
                  <v-btn>Gérer la difficulté</v-btn>
                </router-link>
              </span>
              <span>
                <router-link to="/managePriority">
                  <v-btn>Gérer la priorité</v-btn>
                </router-link>
              </span>
            </h3>

            <v-row v-for="(issue, index) in issues" :key="issue._id">
              <v-col cols="8" @click.stop="issueToShow(index)">
                <IssuePreviewComponent
                  :id="issue._id"
                  :title="issue.title"
                  :progression="issue.progression"
                />
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="4" v-if="show">
            <IssueDetailComponent v-bind="currentIssue" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import IssuePreviewComponent from "./subComponents/IssuePreviewComponent";
import IssueDetailComponent from "./subComponents/IssueDetailComponent";
export default {
  data() {
    return {
      show: false,
      issues: [],
      currentIssue: {},
      issueToShow: {},
      revele: false,
      idIssueToDelete: "",
    };
  },
  components: {
    IssuePreviewComponent,
    IssueDetailComponent,
  },
  created() {
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
    });
  },
};
</script>