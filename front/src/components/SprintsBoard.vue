<template>
  <div>
    <div class="p-2 alert alert-secondary">
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

          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="green" dark v-bind="attrs" v-on="on">
                Ajouter un sprint
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Créer un sprint</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-date-picker v-model="dates" range></v-date-picker>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="dateRangeText"
                        label="Date range"
                        prepend-icon="event"
                        readonly
                        v-if="!overlay"
                      ></v-text-field>
                      <v-text-field
                        v-model="dateRangeText"
                        label="Date range"
                        prepend-icon="event"
                        readonly
                        v-else
                        error
                        :rules="[rules.overlay]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click.stop="createSprint">
                  Créer
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Annuler
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
          Sprint : {{ element._id }}
        </div>
      </draggable>
    </div>
  </div>
</template>


<script>
import moment from "moment";
import draggable from "vuedraggable";
import Board from "./Board";
export default {
  name: "kanban-board",
  props: ["Kanban_Name", "board_name"],
  components: {
    //import draggable as a component
    draggable,
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
  data() {
    return {
      dialog: false,
      dates: [
        moment().format("YYYY-MM-DD"),
        moment().add(3, "days").format("YYYY-MM-DD"),
      ],
      overlay: false,
      rules: {
        overlay: () => "Vous ne pouvez pas superposer des sprints",
      },
      Board,
      items: [{ title: "ajouter", action: "/1" }],
      // for new tasks
      newTask: "",
      issues: [],
      board: [[], [], [], []],
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

    const URL = `${this.proxy}${this.board_route}`;
    this.axios.get(URL).then((response) => {
      this.sortIssues(response.data);
    });
  },

  methods: {
    //add new tasks method
    add: function () {
      console.log("ADD");
      if (this.newTask) {
        //this.arrBackLog.push({ name: this.newTask });
        this.board[0].push({ name: this.newTask });
        this.newTask = "";
      }
    },
    createSprint: function () {
      this.axios
        .post(this.$proxyIssues + "/sprints/", {
          startDate: new Date(this.dates[0]),
          endDate: new Date(this.dates[1]),
        })
        .then(() => window.location.reload())
        .catch(() => {
          console.log("ERREUR");
          this.overlay = true;
        });
    },
    log: function (event) {
      console.log(event);
    },

    sortIssues: function (issues) {
      //console.log(issues);
      for (const issue of issues) {
        //this.arrBackLog.push(issue);
        this.board[0].push(issue);
      }
    },

    update: function (event, status) {
      if (event.added != undefined) {
        let issue = event.added.element;
        console.log(`L'issue:${issue.title} -> ${status}`);
        issue.status = status;
        this.axios.put(`${this.$proxyIssues}/issues/${issue._id}`, issue);
      }
    },
  },
};
</script>
