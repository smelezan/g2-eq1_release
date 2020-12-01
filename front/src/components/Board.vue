<template>
        <div>
                <div class="p-2 alert alert-secondary">
                <div style="display: flex;">
                    <h3 ref="board_name">{{board_name.name}}</h3>
                    <h3 hidden ref="board_number">{{board_name.number}}</h3>
                    <h3 hidden ref="board_route">{{board_name.route}}</h3>
                    <h3 hidden ref="board_action">{{board_name.action}}</h3>
                    <h3 hidden ref="proxy">{{board_name.proxy}}</h3>
                    <v-spacer></v-spacer>
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                light
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="board_action"
              >
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
                    @change="update"
                >
                    <div
                    class="list-group-item"
                    v-for="element in board[board_number]"
                    :key="element._id"
                    >
                    {{ element.title }}
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
  props: ['Kanban_Name','board_name'],
  components: {
    //import draggable as a component
    draggable
  },
  data() {
    return {
        Board,
        items: [
        { title: 'ajouter', action: '/1' },
      ],
      // for new tasks
      newTask: "",
      issues: [],
      // 4 arrays to keep track of our 4 statuses
      // arrBackLog: [],
      // arrToDo: [],
      // arrInProgress: [],
      // arrDone: [],
      board: [[],[],[],[]],
      board_number:0,
      board_route:'',
      board_action:'',
      proxy:'',
    };
  },
  mounted: function() {
            this.board_number = this.$refs.board_number.innerText;
            this.board_route = this.$refs.board_route.innerText;
            this.board_action = this.$refs.board_action.innerText;
            this.proxy = this.$refs.proxy.innerText;
            console.log(this.proxy);
            
            const URL = `${this.proxy}${this.board_route}`;
            this.axios.get(URL).then((response) => {
              this.sortIssues(response.data);
            })
          },

  methods: {
    //add new tasks method
    add: function() {
      console.log("ADD");
      if (this.newTask) {
        //this.arrBackLog.push({ name: this.newTask });
        this.board[0].push({ name: this.newTask });
        this.newTask = "";
      }
    },
    log: function(event){
      console.log(event);
    },

    sortIssues: function(issues){
      //console.log(issues);
      for(const issue of issues){
        //this.arrBackLog.push(issue);
        this.board[0].push(issue);
      }
    },

    update: function(event,status){
      if(event.added!=undefined){
        let issue = event.added.element;
        console.log(`L'issue:${issue.title} -> ${status}`);
        issue.status = status;
        this.axios.put(`${this.$proxyIssues}/issues/${issue._id}`, issue);
      }
    }

  }
};
</script>
