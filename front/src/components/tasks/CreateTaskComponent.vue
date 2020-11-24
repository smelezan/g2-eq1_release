<template>

  <div class="row justify-content-center" >
    <div class="col-md-8" style="margin-top: 100px;margin-left: 300px;">
      <h1>Create A Task !!!</h1>
      <form @submit.prevent="addTask">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Task Title:</label>
              <br>
              <input type="text" class="form-control" v-model="task.title">
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Task Definition of Done:</label>
                <br>
                <textarea class="form-control" v-model="task.dod" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Task Issue:</label>
                <div v-for="issue in issues" :key="issue._id" class="Checkbox" >
                  <input type="checkbox" v-bind:id="issue.title" v-bind:value="issue._id" v-model="issuesId" />{{issue.title}}<br>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-primary">Créer</button>
          <br>
          <router-link to="/tasks"> <button class="btn btn-primary">Annuler</button> </router-link>
      </form>
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
          this.axios.post(this.$proxyTasks+'/tasks', this.task).then(() => {
            this.$router.push({name: 'tasks'});
          });
      }
  }
};
</script>