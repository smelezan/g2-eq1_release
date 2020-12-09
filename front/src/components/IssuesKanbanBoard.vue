<template>
  <div>
    <div>
      <v-row style="float: right" justify="space-around">
        <router-link style="text-decoration: none" to="/create-issue">
          <v-btn color="primary">
            <a style="color: white">Ajouter une Issue</a>
          </v-btn>
        </router-link>
      </v-row>
    </div>
    <div
      class="row mt-5"
      style="margin-left: 0.3cm; font-weight: bold; color: grey"
    >
      <p v-if="openedIssues < 2">Ouverte : {{ openedIssues }}</p>
      <p v-else>Ouvertes : {{ openedIssues }}</p>

      <p v-if="solvedIssues < 2">, Terminée : {{ solvedIssues }}</p>
      <p v-else>, Terminées : {{ solvedIssues }}</p>

      <p v-if="closedIssues < 2">, Fermée : {{ closedIssues }}</p>
      <p v-else>, Fermées : {{ closedIssues }}</p>
    </div>
    <div>
      <v-simple-table height="500px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Détails</th>
              <th>
                <p>Catégorie</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in issues" :key="item.title">
              <td class="item-name">
                <a class="a" style="text-decoration: none; color: black">
                  <IssueFormComponent
                    :title="item.title"
                    :status="item.status"
                    :id="item._id"
                    :priority="item.priority"
                    :difficulty="item.difficulty"
                    :description="item.description"
                    :etat="item.status"
                    :type="item.type"
                    @refresh-page="reloadPage"
                  />
                </a>
              </td>
              <td class="item-name">
                <a class="a" style="text-decoration: none; color: black">
                  {{ item.type }}
                </a>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import Board from "./Board";
import IssueFormComponent from "./issues/IssueFormComponent";
export default {
  data() {
    return {
      openedIssues: 0,
      solvedIssues: 0,
      closedIssues: 0,
      issues: [],
      list: [
        {
          name: "To Do",
          number: "0",
          route: "/issues",
          action: "/create-issue",
          proxy: this.$proxyIssues,
        },
        {
          name: "Doing",
          number: "1",
          route: "/issues",
          action: "/create-issue",
          proxy: this.$proxyIssues,
        },
        {
          name: "Done",
          number: "2",
          route: "/issues",
          action: "/create-issue",
          proxy: this.$proxyIssues,
        },
      ],
      Board,
    };
  },
  components: {
    IssueFormComponent,
  },
  methods: {
    getAllIssues() {
      this.openedIssues = 0;
      this.solvedIssues = 0;
      this.closedIssues = 0;
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.issues = response.data;
        var i;
        for (i in this.issues) {
          if (this.issues[i].status == "TO DO") {
            this.openedIssues++;
          } else if (this.issues[i].status == "DOING") {
            this.openedIssues++;
          } else if (this.issues[i].status == "DONE") {
            this.solvedIssues++;
          } else if (this.issues[i].status == "CLOSED") {
            this.closedIssues++;
          }
        }
      });
    },
    reloadPage() {
      console.log("Issues");
      this.issues = [];
      this.getAllIssues();
    },
  },
  created() {
    this.getAllIssues();
  },
};
</script>

<style>
.item-name {
  max-width: 60%;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.stateIcon {
  position: absolute;
  top: 0%;
  left: 0px;
  transform: scale(0.7);
}
.a:hover {
  color: blue;
}
</style>