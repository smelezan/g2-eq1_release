<template>
  <div class="row mt-5">
    <div class="row mt-5" style="margin-left:0.3cm; font-weight:bold; color:grey">
      <p v-if="openedIssues<2">Ouverte : {{openedIssues}}</p>
      <p v-else>Ouvertes : {{openedIssues}}</p>

      <p v-if="solvedIssues<2">Terminée : {{solvedIssues}}</p>
      <p v-else>, Terminées : {{solvedIssues}}</p>
      
      <p v-if="closedIssues<2">, Fermée : {{closedIssues}}</p>
      <p v-else>, Fermées : {{closedIssues}}</p>

    </div>
    <div class="row mt-5">
    <v-col v-for="(item, i) in list" :key="i">
      <component :is="Board" :board_name="list[i]"></component>
    </v-col>
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
      var i;
      for (i in this.issues){
        if (this.issues[i].status=="TO DO"){
          this.openedIssues ++;
          console.log("coucou");
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