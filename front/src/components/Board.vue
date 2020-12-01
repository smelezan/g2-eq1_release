<template>
        <div class="col-3">
                <div class="p-2 alert alert-secondary">
                <div style="display: flex;">
                    <h3 ref="board_name">{{board_name.name}}</h3>
                    <h3 hidden ref="board_number">{{board_name.number}}</h3>
                    <h3 hidden ref="board_route">{{board_name.route}}</h3>
                    <v-spacer></v-spacer>
                    <v-list-item-icon>
                        <v-icon style="top:-15px;">more_horiz</v-icon>
                    </v-list-item-icon>
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
    };
  },
  created() {
    
    this.axios.get(this.$proxyTasks+'/tasks').then((response) => {
        this.sortIssues(response.data);
        //console.log(this.$refs.board_name.innerText);
        //this.board[this.$refs.board_name.innerText].push("coucou");
        this.board_number = this.$refs.board_number.innerText;
        console.log(this.$refs.board_route.innerText);
    });
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