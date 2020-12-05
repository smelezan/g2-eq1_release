<template>
  <div>
    <v-row style="float: right" justify="space-around">
      <AddSprintModaleComponent />
    </v-row>
    <div v-if="this.sprints.length < 1" class="col">
      <h3 class="garamond">Aucun sprint créé</h3>
    </div>
    <v-expansion-panels multiple v-else>
      <v-expansion-panel v-for="sprint in sprints" :key="sprint.name">
        <v-expansion-panel-header>
          <v-row no-gutters>
            <v-col cols="4">{{ sprint.name }}</v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <v-progress-linear
                  v-model="value"
                  :buffer-value="bufferValue"
                  color="red"
                  style="width: 50%"
                ></v-progress-linear>
              </v-fade-transition>
              <th style="position: absolute; bottom: 10%; left: 68%; top: 10%">
                début: {{ sprint.startDate }}
              </th>
              <th style="position: absolute; bottom: 10%; left: 68%; top: 60%">
                fin: {{ sprint.endDate }}
              </th>
            </v-col>
          </v-row>
        </v-expansion-panel-header>

        <!-- Table des Sprints -->

        <v-expansion-panel-content>
          <draggable
            class="list-group sprint-table"
            :list="sprint.issues"
            group="tasks"
            @change="updateSprint($event, sprint._id)"
          >
            <ul
              class="sortable"
              :id="element.id"
              v-for="element in sprint.issues"
              :key="element.name"
            >
              <li>{{ element.title }}</li>
            </ul>
          </draggable>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

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
              <tr v-for="item in unasignedIssues" :key="item.title">
                <td>
                  <a
                    class="a"
                    style="text-decoration: none; color: black"
                    href="http://google.com"
                  >
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          class="stateIcon"
                          v-if="item.status != 'DONE'"
                          v-bind="attrs"
                          v-on="on"
                          >mdi-progress-alert</v-icon
                        >
                        <v-icon
                          class="stateIcon"
                          v-else
                          v-bind="attrs"
                          v-on="on"
                          style="color: green"
                          >mdi-alert-circle-check-outline</v-icon
                        >
                      </template>
                      <span v-if="item.status != 'DONE'">issue ouverte</span>
                      <span v-else>issue terminée</span>
                    </v-tooltip>
                    {{ item.title }}
                  </a>
                </td>
              </tr>
            </draggable>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import AddSprintModaleComponent from "./sprints/subComponents/AddSprintModaleComponent";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
    AddSprintModaleComponent,
  },
  data() {
    return {
      startDate: "",
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
          this.unasignedIssues.push(issue);
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