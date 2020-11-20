<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h3 align="center">Non assignés</h3>
        <draggable
          v-model="unassignedIssues"
          group="people"
          @start="drag = true"
          @end="drag = false"
        >
          <div v-for="issue in unassignedIssues" :key="issue.id">
            <issueSummary :title="issue.title" :difficulty="0" />
          </div>
        </draggable>
      </div>

      <div
        class="col-3"
        v-for="difficulty in difficultyList"
        :key="difficulty.id"
      >
        <h3 align="center">Difficuté: {{ difficulty.difficulty }}</h3>
        <div>
          <draggable
            v-model="difficulty.issues"
            group="people"
            @start="drag = true"
            @end="drag = false"
          >
            <div v-for="issue in difficulty.issues" :key="issue.id">
              <issueSummary
                :title="issue.title"
                :difficulty="difficulty.difficulty"
              />
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-3">
        <button @click="addDifficulty" class="btn btn-primary">
          Ajouter une difficulté
        </button>
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col" align="right">
        <button class="btn btn-primary" @click="applyChanges">Appliquer</button>
        <button class="btn btn-primary" @click="cancelChanges">Annuler</button>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import issueSummary from "./subComponents/IssueSummary";

export default {
  name: "DifficultyManagement",
  order: 1,
  components: {
    draggable,
    issueSummary,
  },
  data() {
    return {
      unassignedIssues: [],
      difficultyList: [
        {
          difficulty: 1,
          issues: [],
        },
      ],
    };
  },
  created() {
    this.axios.get(this.$proxyIssues + "/issues").then((response) => {
      let issues = response.data;
      this.sortIssues(issues);
    });
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    },
    addDifficulty: function () {
      this.difficultyList.push({
        difficulty: fibonacci(this.difficultyList.length + 1),
        issues: [],
      });
    },
    applyChanges: function () {
      //Envoyer au serveur  d'issues  la liste.
      this.axios
        .put(this.$proxyIssues + "/issues/manageDifficulty", {
          difficultyList: this.difficultyList,
        })
        .then(() => {});
    },
    sortIssues: function (issues) {
      for (let issue of issues) {
        //window.console.log(issue);
        if (
          issue.difficulty == undefined ||
          issue.difficulty == null ||
          issue.difficulty == 0
        ) {
          this.unassignedIssues.push(issue);
        } 
        else {
          let difficulty = this.difficultyList.find(
            (element) => element.difficulty === issue.difficulty
          );
          if (difficulty === undefined) {
            this.difficultyList.push({
              difficulty: issue.difficulty,
              issues: [issue],
            });
          } 
          else {
            difficulty.issues.push(issue);
          }
        }
      }
      let maxDifficulty =0;
      this.difficultyList.forEach(diff => {
        if(diff.difficulty > maxDifficulty) maxDifficulty=diff.difficulty;
        });
      
      for(let n = 1; fibonacci(n)<maxDifficulty; n++){
        if(this.difficultyList.find(elm=>elm.difficulty === fibonacci(n)) === undefined){
          this.difficultyList.push({difficulty:fibonacci(n), issues:[]});
        }
      }

      this.difficultyList.sort((a,b)=>{
        return a.difficulty - b.difficulty;
      });
    },
    cancelChanges: function () {
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.unassignedIssues = [];
        this.difficultyList = [];
        let issues = response.data;
        this.sortIssues(issues);
      });
    },
  },
};

function fibonacci(num) {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}
</script>