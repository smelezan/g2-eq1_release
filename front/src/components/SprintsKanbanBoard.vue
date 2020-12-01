<template>
    <v-app id="inspire">
        <v-card>
    <div class="row">
      <div class="col form-inline">
        <b-form-input
          id="input-2"
          v-model="newTask"
          required
          :placeholder="Kanban_Name"
          @keyup.enter="add"
        ></b-form-input>
        <b-button @click="add" variant="primary" class="ml-3">Ajouter</b-button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <div style="display: flex;">
            <h3>Back Log</h3>
            <v-spacer></v-spacer>
            <v-list-item-icon>
                <v-icon style="top:-15px;">more_horiz</v-icon>
            </v-list-item-icon>
          </div>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
            @change="update"
          >
            <div
              class="list-group-item"
              v-for="element in arrBackLog"
              :key="element._id"
            >
              Sprint Id : {{ element._id }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <div style="display: flex;">
            <h3>TO DO</h3>
            <v-spacer></v-spacer>
            <v-list-item-icon>
                <v-icon style="top:-15px;">more_horiz</v-icon>
            </v-list-item-icon>
          </div>
          <!-- To Do draggable component. Pass arrToDo to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrToDo"
            group="tasks"
            @change="update($event,'TO DO')"
          >
            <div
              class="list-group-item"
              v-for="element in arrToDo"
              :key="element._id"
            >
              Sprint Id : {{ element._id }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <div style="display: flex;">
            <h3>DOING</h3>
            <v-spacer></v-spacer>
            <v-list-item-icon>
                <v-icon style="top:-15px;">more_horiz</v-icon>
            </v-list-item-icon>
          </div>
          <!-- In Progress draggable component. Pass arrInProgress to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrInProgress"
            group="tasks"
            @change="update($event,'DOING')"
          >
            <div
              class="list-group-item"
              v-for="element in arrInProgress"
              :key="element._id"
            >
              Sprint Id : {{ element._id }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-warning">
          <div style="display: flex;">
            <h3>DONE</h3>
            <v-spacer></v-spacer>
            <v-list-item-icon>
                <v-icon style="top:-15px;">more_horiz</v-icon>
            </v-list-item-icon>
          </div>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrDone"
            group="tasks"
            @change="update($event,'DONE')"
          >
            <div
              class="list-group-item"
              v-for="element in arrDone"
              :key="element._id"
            >
              Sprint Id : {{ element._id }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
        </v-card>
    </v-app>
</template>

<script>
//import draggable
import draggable from "vuedraggable";
export default {
  name: "kanban-board",
  props: ['Kanban_Name'],
  components: {
    //import draggable as a component
    draggable
  },
  data() {
    return {
      // for new tasks
      newTask: "",
      issues: [],
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [],
      arrToDo: [],
      arrInProgress: [],
      arrDone: []
    };
  },
  created() {
    
    this.axios.get(this.$proxyIssues + "/sprints").then((response) => {
      this.sortIssues(response.data);
      console.log(response.data)
    });
  },
  methods: {
    //add new tasks method
    add: function() {
      console.log("ADD");
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
      }
    },
    log: function(event){
      console.log(event);
    },

    sortIssues: function(issues){
      for(const issue of issues){
        this.arrBackLog.push(issue);
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

<style>
/* light stylings for the kanban columns */
.kanban-column {
  min-height: 300px;
}
</style>