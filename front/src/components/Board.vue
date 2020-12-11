<template>
  <div>
    <div class="p-2 alert alert-secondary col-8">
      <div style="display: flex">
        <h3 ref="board_name">{{ board_name.name }}</h3>
        <h3 hidden ref="board_number">{{ board_name.number }}</h3>
        <h3 hidden ref="board_route">{{ board_name.route }}</h3>
        <h3 hidden ref="board_action">{{ board_name.action }}</h3>
        <h3 hidden ref="proxy">{{ board_name.proxy }}</h3>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn light icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i" :to="board_action">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- Backlog draggable component. Pass arrBackLog to list prop -->
      <draggable
        class="list-group kanban-column"
        :list="board[board_number]"
        group="tasks"
        @change="update($event, board_name.name)"
      >
        <div
          class="list-group-item"
          v-for="element in board[board_number]"
          :key="element._id"
        >
        <div >
          <div class="issue-card" style="position: relative;">
            <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon class="stateIcon"
                      v-if="element.status!='DONE'"
                      v-bind="attrs"
                      v-on="on"
                    >mdi-progress-alert</v-icon>
                    <v-icon class="stateIcon"
                      v-else
                      v-bind="attrs"
                      v-on="on"
                    >mdi-alert-circle-check-outline</v-icon>
                  </template>
                  <span v-if="element.status!='DONE'">Tâche ouverte</span>
                  <span v-else>Tâche fermée</span>
                </v-tooltip>
          <p id="issueTitle">{{ element.title }}</p>
        <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="icon" light icon v-bind="attrs" v-on="on">
                      <v-icon
                      >mdi-trash-can</v-icon>
                    </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Souhaitez-vous supprimer cet élément ?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                  >
                    Annuler
                  </v-btn>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false, removeItem(element)"
                  >
                    Confirmer
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            </div>
      </div>
        </div>
      </draggable>
    </div>
  </div>
</template>


<script>
//import draggable
import draggable from "vuedraggable";
import Board from "./Board";
export default {
  name: "kanban-board",
  props: ["Kanban_Name", "board_name"],
  components: {
    //import draggable as a component
    draggable,
  },
  data() {
    return {
      dialog: false,
      Board,
      items: [{ title: "ajouter", action: "/1" }],
      // for new tasks
      newTask: "",
      issues: [],
      
      board: [[], [], []],
      board_number: 0,
      board_route: "",
      board_action: "",
      proxy: "",
    };
  },
  mounted: function () {
    this.board_number = this.$refs.board_number.innerText;
    this.board_route = this.$refs.board_route.innerText;
    this.board_action = this.$refs.board_action.innerText;
    this.proxy = this.$refs.proxy.innerText;
    //console.log(this.proxy);

    const URL = `${this.proxy}${this.board_route}`;
    this.axios.get(URL).then((response) => {
      this.sortIssues(response.data);
    });
    //console.log(this.board);
  },
  methods: {
    removeItem: function(element) {
      const URL = `${this.proxy}${this.board_route}`;
      this.axios.delete(URL+"/"+element._id).then(()=> window.location.reload());
    },
    //add new tasks method
    add: function () {
      console.log("ADD");
      if (this.newTask) {
        //this.arrBackLog.push({ name: this.newTask });
        this.board[0].push({ name: this.newTask });
        this.newTask = "";
      }
    },
    log: function (event) {
      console.log(event);
    },

    sortIssues: function (issues) {
      for (const issue of issues) {
        if (issue.status == "TO DO") {
          //console.log(issue);
          this.board[0].push(issue);
        } else if (issue.status == "DOING") this.board[1].push(issue);
        else if (issue.status == "DONE") this.board[2].push(issue);
        else this.board[0].push(issue);
      }
    },

    update: function (event, status) {
      if (event.added != undefined) {
        let issue = event.added.element;
        console.log(`L'issue:${issue.title} -> ${status.toUpperCase()}`);
        issue.status = status.toUpperCase();
        this.axios.put(`${this.$proxyIssues}/issues/${issue._id}`, issue);
      }
    },
  },
};
</script>

<style>
  .issue-card {
    background: rgba(199, 203, 209, 0.26);
    height: 130px;
    margin-top: 10px;
    border-radius: 0.5cm;
    text-overflow: ellipsis;
    /* border: 2px solid green; */
  }
  #issueTitle {
    height: 100px;
    /* border: 2px solid red; */
    overflow: hidden;
    transform: scale(0.8);
    position: relative;
    bottom: 10px;
    font-family :Arial, Helvetica, sans-serif;
    font-size: 17px;
  }
  .kanban-column {
    min-height: 300px;
  }
  .icon {
    /* border:2px solid blue;  */
    position:absolute; 
    bottom: 90px; 
    right: 0px
  }
  .stateIcon {
    /* border: 2px solid magenta; */
    position:absolute; 
    top: 4%; 
    left: 0px;
    transform: scale(0.7)
  }
</style>