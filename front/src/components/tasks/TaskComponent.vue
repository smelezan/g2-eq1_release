<template>
    <div class="row justify-content-center" >
        <div class="col-md-8" style="margin-top: 100px;margin-left: 300px;">
            <div class="main">
                <h3>Task</h3>
                <form>
                    <div class="data">
                        <label for="Title">Titre : {{ task.title }}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Description">Description : {{ task.dod }}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="cost">Coût : {{ task.cost }}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Dev">Développeurs : {{ task.developer }}</label>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Dep">Task dep : </label>
                        <div v-for="dep in taskTasks" :key="dep._id">
                            {{dep.title}}
                        </div>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Issue">Task Issues : </label>
                        <div v-for="issue in taskIssues" :key="issue._id">
                            {{issue.title}}
                        </div>
                    </div>
                    <br>
                    <div class="data">
                        <label for="Status">Status : {{ task.status }}</label>
                    </div>
                </form>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Change Data
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
                                        <v-text-field label="Description" v-model="newDesc" >
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <button v-on:click.prevent="decrement"> Decrease </button>
                                        {{newCost}}
                                        <button v-on:click.prevent="increment">Increase</button>
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
                                       Issues :
                                        <div v-for="issue in issues" :key="issue._id" class="Checkbox" >
                                            <input type="checkbox" v-bind:id="issue.title" v-bind:value="issue._id" v-model="newIssuesId" />{{issue.title}}<br>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        Dépendances :
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
                <span> <router-link to="/tasks"> <button class="btn btn-primary">Retour</button> </router-link></span>
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
            this.newIssuesId = this.task.issues;
            this.newTasksId = this.task.dependencies;
            if(this.task.developer == undefined){
                this.newDevs = "";
            }else{
                this.newDevs = this.task.developer;
            }
            this.newStat = this.task.status;
            this.task.issues.forEach(id => {
                this.axios.get(this.$proxyIssues+'/issues/'+id).then(response =>{
                    this.taskIssues.push(response.data);
                });
            });
            this.task.dependencies.forEach(id => {
                this.axios.get(this.$proxyTasks+'/tasks/'+id).then(response =>{
                    this.taskTasks.push(response.data);
                });
            });
            this.axios.get(this.$proxyIssues + "/issues").then((response) => {
                this.issues = response.data;
            });
            this.axios.get(this.$proxyTasks + "/tasks").then((response) => {
                this.tasks = response.data;
            });
        });
    },
    methods:{
      update: function(){
          if(this.newTitle != this.task.title){
            this.task.title = this.newTitle;
          }
          if(this.newDesc != this.task.dod){
            this.task.dod = this.newDesc;
          }
          if(this.newCost != this.task.cost){
            this.task.cost = this.newCost;
          }
          if(this.newDevs != this.task.developer){
            this.task.developer = this.newDevs;
          }
          if(this.newIssuesId != this.task.issues){
            this.task.issues = this.newIssuesId;
          }
          if(this.newTasksId != this.task.dependencies){
            this.task.dependencies = this.newTasksId;
          }
          if(this.newStat != this.task.status){
            this.task.status = this.newStat;
          }
          this.axios.put(this.$proxyTasks+'/tasks/'+this.id,this.task)
          .then(()=> window.location.reload())
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
          this.newIssuesId = this.task.issues;
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