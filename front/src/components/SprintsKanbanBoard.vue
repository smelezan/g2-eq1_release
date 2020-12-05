<template>
  <div>
    <v-row
    style="float: right"
    justify="space-around"
  >
    <v-btn
      depressed
      color="#90EE90"
    >
      créer
    </v-btn>
    <v-btn
      v-if="sprints.length"
      depressed
    >
      supprimer
    </v-btn>
  </v-row>
    <div v-if="this.sprints.length<1" class="col"> <h3 class="garamond">Aucun sprint créé</h3></div>
    <v-expansion-panels
        multiple
        v-else
      >
        <v-expansion-panel
          v-for="(sprint) in sprints"
          :key="sprint.name"
        >
          <v-expansion-panel-header>
            <v-row no-gutters>
              <v-col cols="4">{{sprint.name}}</v-col>
              <v-col
                cols="8"
                class="text--secondary"
              >
                <v-fade-transition leave-absolute>
                      <v-progress-linear
                        v-model="value"
                        :buffer-value="bufferValue"
                        color="red"
                        style="width:50%"
                      ></v-progress-linear>
                </v-fade-transition>
              <th style="position:absolute; bottom: 10%; right:68%; top:25%">{{sprint.startDate}}</th>
              <th style="position:absolute; bottom: 10%; left:68%; top:25%">{{sprint.endDate}}</th>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>

            <draggable class="list-group sprint-table" :list="sprint.issues" group="tasks">
              <ul class="sortable" :id="element.id" v-for="element in sprint.issues" :key="element.name">
                  <li>US:{{element.id}}</li>
              </ul>
            </draggable>

          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
  
  <div class="col">
      <div >
        <h3 v-if="this.unasignedIssues.length>0">
          Issues non assignés
          <v-icon 
            right
            style="color:orange"
          >
            mdi-alert
          </v-icon>
        </h3>
        <draggable class="list-group" :list="unasignedIssues" group="tasks">
          <ul style="background:LemonChiffon" class="sortable" :id="element.name" v-for="element in unasignedIssues" :key="element.name">
            <li>{{element.title}}</li>
          </ul>
        </draggable>
      </div>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
        value: 10,
        bufferValue: 100,
        interval: 0,
        sprints: [{name:'',issues:[{name: '', id:''}]}],
        unasignedIssues: [],
        arrOne: [],
        arrTwo: [],
        oldIndex:'',
        newIndex: ''
    }
  },
  methods: {
    onEnd: function(evt) {
      console.log(evt)
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
    },
    log(event, id) {
      console.log(event);
      console.log(id);
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
/*   .wrapper {
    max-height: 120px;
    border: 0px solid #ddd;
    display: flex;
    overflow-x: auto;
  }
 */
  .wrapper::-webkit-scrollbar{
    width: 0;
  }

  .wrapper .item{
    border-radius: 10%;
    min-width: 350px;
    line-height: 110px;
    text-align: center;
    background-color: #F0F8FF;
    margin-right: 10px;
  }

  .sprint-name {
    background: white;
    font-family: 'Courier New', Courier, monospace;
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