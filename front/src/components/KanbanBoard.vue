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
          <h3>TO DO</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrBackLog"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrBackLog"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <h3>DOING</h3>
          <!-- In Progress draggable component. Pass arrInProgress to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrInProgress"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrInProgress"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-warning">
          <h3>DONE</h3>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <draggable
            class="list-group kanban-column"
            :list="arrTested"
            group="tasks"
          >
            <div
              class="list-group-item"
              v-for="element in arrTested"
              :key="element.name"
            >
              {{ element.name }}
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
      // 4 arrays to keep track of our 4 statuses
      arrBackLog: [
        { name: "Code Sign Up Page" },
        { name: "Test Dashboard" },
        { name: "Style Registration" },
        { name: "Help with Designs" }
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: []
    };
  },
  methods: {
    //add new tasks method
    add: function() {
      if (this.newTask) {
        this.arrBackLog.push({ name: this.newTask });
        this.newTask = "";
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