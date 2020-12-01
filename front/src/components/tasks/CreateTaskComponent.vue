<template>
  <div class="row justify-content-center" >
    <div class="col-md-8" style="margin-top: 100px;margin-left: 300px;">
      <h1>Création de tâche</h1>
      <div class="row">
        <div class="col-md-6">
          <label>Titre:</label>
          <br>
          <v-text-field v-model="task.title" :counter="20" label="Titre" required></v-text-field>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <label>Definition of Done:</label>
          <br>
          <v-textarea class="form-control" v-model="task.dod" label="Definition of Done" rows="5"></v-textarea>
        </div>
      </div>
      <label>Liste des Issues:</label>
        <div class="row">
          <div v-for="issue in issues" :key="issue._id">
            <div class="col">
              <v-checkbox v-bind:id="issue.title" v-bind:value="issue._id" v-model="issuesId" :label="issue.title" padding:35px>{{issue.title}}       </v-checkbox>
            </div>
          </div>
        </div>
      <v-btn class="btn btn-primary" @click="addTask()" color="blue">Créer</v-btn>
      <v-btn class="btn btn-primary" to="/tasks" color="red">Annuler</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      issuesId: [],
      issues: {},
      task: {}
    };
  },
  created() {
      this.axios.get(this.$proxyIssues + "/issues").then((response) => {
        this.issues = response.data;
    });
  },
  methods: {
      addTask(){
          this.task.issues = this.issuesId;
          console.log(this.task);
          this.axios.post(this.$proxyTasks+'/tasks', this.task).then(() => {
            this.$router.push({name: 'tasks'});
          });
      }
  }
};
</script>