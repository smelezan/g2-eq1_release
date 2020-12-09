<template>
  <div>
    <v-row style="float: right" justify="space-around">
      <AddSprintModaleComponent />
    </v-row>
    <div v-if="this.sprints.length < 1" class="col">
      <h3 class="garamond"> Aucun sprint créé</h3>
    </div>
    <div v-for="(value) in sprints" :key="value._id">
       
        <SprintComponent 
          :sprints="value"
    />
    </div>

    <!-- Issues Non Assignées -->

    <div class="col">
      <h3 v-if="this.unasignedIssues.length > 0">
        Issues non assignés
        <v-icon right style="color: orange"> mdi-alert </v-icon>
      </h3>

      <!-- Table des Issues Non Assignées -->

      <v-simple-table height="500px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Détails</th>
            </tr>
          </thead>
          <tbody>
            <draggable :list="unasignedIssues" group="tasks">
              <tr v-for="item in unasignedIssues" :key="item">
                <issueItemComponent 
                  :id="item"
                />
              </tr>
            </draggable>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import AddSprintModaleComponent from "./subComponents/AddSprintModaleComponent";
import SprintComponent from "./subComponents/SprintComponent";
import IssueItemComponent from "./subComponents/IssueItemComponent"
import draggable from "vuedraggable";
export default {
  components: {
    SprintComponent,
    IssueItemComponent,
    draggable,
    AddSprintModaleComponent,
  },
  data() {
    return {
      value: 10,
      bufferValue: 100,
      interval: 0,
      sprints: [],
      unasignedIssues: [],
      arrOne: [],
      arrTwo: [],
      oldIndex: "",
      newIndex: "",
    };
  },
  methods: {
    onEnd: function (evt) {
      console.log(evt);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
    },
    log(event) {
      console.log(event);
      //console.log(id);
    },
    updateSprint(event, id) {
      console.log(event);
      console.log(id);
      if (event.added) {
        //ajouter l'issue
        this.axios.put(`${this.$proxyIssues}/sprints/addIssue/${id}`, {
          issueId: event.added.element._id,
        });
      } else if (event.removed) {
        this.axios.put(`${this.$proxyIssues}/sprints/removeIsues/${id}`, {
          issueId: event.removed.element._id,
        });
      }
    },
    sortIssues(issues) {
      this.unasignedIssues = [];
      for (const issue of issues) {
        let issueFound = false;
        for (const sprint of this.sprints) {
          issueFound = sprint.issues.some((issueOfSprint) => {
            return issueOfSprint === issue._id;
          });
          if (issueFound) break;
        }
        if (!issueFound) {
          this.unasignedIssues.push(issue._id);
        }
      }
    },
  },
  created() {
    this.axios.get(this.$proxyIssues + "/sprints").then((response) => {
      this.sprints = response.data;
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.issues = response.data;
        this.sortIssues(this.issues);
      });
    });
  },
};
</script>

<style>
*/ .wrapper::-webkit-scrollbar {
  width: 0;
}

.wrapper .item {
  border-radius: 10%;
  min-width: 350px;
  line-height: 110px;
  text-align: center;
  background-color: #f0f8ff;
  margin-right: 10px;
}

.sprint-name {
  background: white;
  font-family: "Courier New", Courier, monospace;
}
.sprint-table {
  width: 100%;
}

.sortable {
  width: 100%;
  background: white;
  cursor: move;
  margin-bottom: 2px;
  margin-top: 3px;
  border-radius: 0.5cm;
}

.flip-list-move {
  transition: transform 0.3s;
}

.garamond {
  font-family: roboto;
  color: grey;
}
</style>