<template>
  <div>
    <div>
      <v-row style="float: right" justify="space-around">
        <div style="display: table-cell" @click="openHelp()" class="mx-auto">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon 
              v-bind="attrs"
              v-on="on"
              color="grey"
              style=" position:relative; bottom:-5px; right:5px"
              >help_outline</v-icon>
            </template>
            <span>Message pour la doc user issue</span>
          </v-tooltip>
        </div>

        <div class="text-center">
          <v-dialog
            v-model="help"
            width="500"
          >

            <v-card>
              <v-card-title class="headline grey lighten-2">
                Aide
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="help = false"
                >
                  Fermer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

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
      help: false,
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
    openHelp: function() {
      this.help = !this.help
    },
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