<template>
    <div class="row justify-content-center" >
        <div class="col-md-8" style="margin-top: 100px;margin-left: 300px;">
            <div class="main">
                <form>
                    <div class="data">
                        <label for="title">Titre : {{task.title}}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Description">Definition of Done : </label>
                        <br>
                        <v-textarea outline readonly v-model="task.dod"> </v-textarea>
                    </div>
                    <br>
                    <div class="data">
                        <label for="cout">Coût : {{task.cost}}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="dev">Développeurs : {{task.developer}}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Issue">Dépendances Issues : </label>
                        <div class="row">
                            <div v-for="issue in taskIssues" :key="issue._id">
                                <v-card class="col">
                                    {{issue.title}}
                                </v-card>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Dep">Dépendances tâches : </label>
                        <div class="row">
                            <div v-for="dep in taskTasks" :key="dep._id">
                                <v-card class="col">
                                    {{dep.title}}
                                </v-card>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Status">Status : {{task.status}}</label>
                    </div>
                <br>
                </form>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Modifier
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Modifier une tâche</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Title" v-model="newTitle" >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea label="Definition of Done" v-model="newDesc" >
                                        </v-textarea>
                                    </v-col>
                                    <v-col cols="12">
                                        <div class="row">
                                        <label >Coût : </label>
                                        <label >{{newCost}}</label>
                                        </div>
                                        <div class="row">
                                            <v-btn v-on:click.prevent="decrement" color=blue> Diminuer </v-btn>
                                            <v-btn v-on:click.prevent="increment" color=blue>Augmenter</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <label for="inputState">Développeurs :</label>
                                        <select id="inputState" class="form-control" v-model="newDevs">
                                            <option value="">Aucun</option>
                                            <option value="Alexis">Alexis</option>
                                            <option value="Emmanoe">Emmanoe</option>
                                            <option value="Sebastien">Sebastien</option>
                                        </select>
                                    </v-col>
                                    <v-col cols="12">
                                       Dépendances Issues :
                                        <div v-for="issue in issues" :key="issue._id" class="Checkbox" >
                                            <input type="checkbox" v-bind:id="issue.title" v-bind:value="issue._id" v-model="newIssuesId" />{{issue.title}}<br>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        Dépendances tâches :
                                        <div v-for="dep in tasks" :key="dep._id" class="Checkbox" >
                                            <div v-if="dep._id != id">
                                                <input type="checkbox" v-bind:id="dep.title" v-bind:value="dep._id" v-model="newTasksId" />{{dep.title}}<br>
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <label for="inputState">Status :</label>
                                        <select id="inputState" class="form-control" v-model="newStat">
                                            <option value="TO DO">TO DO</option>
                                            <option value="DOING">DOING</option>
                                            <option value="DONE">DONE</option>
                                        </select>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false" @click.stop="update()">
                                Changer
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false" @click.stop="clear()">
                                Annuler
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <span> <v-btn class="btn btn-primary"  to="/tasks">Retour</v-btn></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          task:{},
          issues:{},
          tasks:{},
          taskIssues:[],
          taskIssuesId:[],
          taskTasks:[],
          id:"",
          newTitle:"",
          newDesc:"",
          newCost:0,
          newDevs:"",
          newIssuesId:[],
          newTasksId:[],
          newStat:"",
          dialog: false,
          index:0,
          changedIssue:{},
      }
  },
    created() {
        this.id = this.$route.params.id;
        this.axios.get(this.$proxyTasks+'/tasks/'+this.id).then(response =>{
            this.task = response.data;
            this.newTitle = this.task.title;
            this.newDesc = this.task.dod;
            if(this.task.cost == undefined){
                this.newCost = 0;
            }else{
                this.newCost = this.task.cost;
            }
            // this.newIssuesId = this.task.issues; Ok
            this.newTasksId = this.task.dependencies;
            if(this.task.developer == undefined){
                this.newDevs = "";
            }else{
                this.newDevs = this.task.developer;
            }
            this.newStat = this.task.status;
            /* Ok
            this.task.issues.forEach(id => {
                this.axios.get(this.$proxyIssues+'/issues/'+id).then(response =>{
                    this.taskIssues.push(response.data);
                });
            });
            */
            this.task.dependencies.forEach(id => {
                this.axios.get(this.$proxyTasks+'/tasks/'+id).then(response =>{
                    this.taskTasks.push(response.data);
                });
            });
            this.axios.get(this.$proxyIssues + "/issues").then((response) => {
                this.issues = response.data;
                this.issues.forEach(issue => {
                  if(issue.tasks.indexOf(this.task._id) != -1){
                    this.taskIssues.push(issue);
                    this.taskIssuesId.push(issue._id);
                  }
                });
                this.newIssuesId = this.taskIssuesId;
            });
            this.axios.get(this.$proxyTasks + "/tasks").then((response) => {
                this.tasks = response.data;
            });
        });
    },
    methods:{
      update: function(){
          this.task.title = this.newTitle;
          this.task.dod = this.newDesc;
          this.task.cost = this.newCost;
          this.task.developer = this.newDevs;
          // Remove from old Ok
          console.log(this.taskIssues);
          this.taskIssues.forEach(issue => {
            while(issue.tasks.indexOf(this.task._id)!=-1){
              this.index = issue.tasks.indexOf(this.task._id);
              issue.tasks.splice(this.index,1);
              this.axios.put(this.$proxyIssues+'/issues/'+issue._id,issue);
            }
          });
          this.taskIssues = [];
          // Add to new Ok
          this.newIssuesId.forEach(issueId => {
            this.axios.get(this.$proxyIssues+'/issues/'+issueId).then(response =>{
              this.changedIssue = response.data;
              while( (this.changedIssue.tasks.indexOf(this.task._id ) == -1) || (this.taskIssues.indexOf(this.changedIssue) == -1)){
                this.taskIssues.push(this.changedIssue);
                this.changedIssue.tasks.push(this.task._id);
                this.axios.put(this.$proxyIssues+'/issues/'+this.changedIssue._id,this.changedIssue);
              }
            });
          });
          this.taskIssuesId = this.newIssuesId;
          this.task.dependencies = this.newTasksId;
          this.task.status = this.newStat;
          this.axios.put(this.$proxyTasks+'/tasks/'+this.id,this.task)
          //.then(()=> window.location.reload());
      },
      clear: function(){
          this.newTitle = this.task.title;
          this.newDesc = this.task.dod;
          if(this.task.cost == undefined){
            this.newCost = 0;
          }else{
            this.newCost = this.task.cost;
          }
          if(this.task.developer == undefined){
            this.newDevs = "";
          }else{
            this.newDevs = this.task.developer;
          }
          this.newIssuesId = this.taskIssuesId;
          this.newTasksId = this.task.dependencies;
          this.newDevs = this.task.developer;
          this.newStat = this.task.status;
      },
      decrement: function(){
          if(this.newCost > 0){
            this.newCost -= 0.5;
          }
      },
      increment: function(){
          if(this.newCost < 5){
            this.newCost += 0.5;
          }
      }
    }
}
</script>