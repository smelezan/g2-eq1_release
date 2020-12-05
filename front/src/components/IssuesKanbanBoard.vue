<template>
  <div class>
    <div class="row mt-5" style="margin-left:0.3cm; font-weight:bold; color:grey">
      <p v-if="openedIssues<2">Ouverte : {{openedIssues}}</p>
      <p v-else>Ouvertes : {{openedIssues}}</p>

      <p v-if="solvedIssues<2">, Terminée : {{solvedIssues}}</p>
      <p v-else>, Terminées : {{solvedIssues}}</p>
      
      <p v-if="closedIssues<2">, Fermée : {{closedIssues}}</p>
      <p v-else>, Fermées : {{closedIssues}}</p>

    </div>
    <div >
      <v-simple-table height="500px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Détails
              </th>
              <th>
                <p style="text-align: center; margin-right:35px;">Catégorie</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in issues"
              :key="item.title"
            >
              <td 
              class="item-name">
              <a class="a" style="text-decoration: none; color: black" href="http://google.com">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon class="stateIcon"
                      v-if="item.status!='DONE'"
                      v-bind="attrs"
                      v-on="on"
                    >mdi-progress-alert</v-icon>
                    <v-icon class="stateIcon"
                      v-else
                      v-bind="attrs"
                      v-on="on"
                      style="color:green"
                    >mdi-alert-circle-check-outline</v-icon>
                  </template>
                  <span v-if="item.status!='DONE'">issue ouverte</span>
                  <span v-else>issue terminée</span>
                </v-tooltip>
                {{ item.title }}
              </a>
                </td>
              <td class="item-name">
              <a class="a" style="text-decoration: none; color: black" href="http://google.com">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon class="stateIcon"
                      v-bind="attrs"
                      v-on="on"
                    >mdi-check</v-icon>
                  </template>
                  <span >Fermer l'issue</span>
                </v-tooltip>
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
export default {
  data() {
    return {
      openedIssues:0,
      solvedIssues:0,
      closedIssues:0,
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
  created() {
    this.axios.get(this.$proxyIssues + "/issues").then((response) => {
      this.issues = response.data;
      console.log(this.issues);
      var i;
      for (i in this.issues){
        if (this.issues[i].status=="TO DO"){
          this.openedIssues ++;
        }
        else if (this.issues[i].status=="DOING"){
          this.openedIssues ++;
        }
        else if (this.issues[i].status=="DONE"){
          this.solvedIssues ++;
        }
      } 
    })
  }
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
    position:absolute; 
    top: 0%; 
    left: 0px;
    transform: scale(0.7)
  }
  .a:hover {
    color: blue;
  }
  
</style>