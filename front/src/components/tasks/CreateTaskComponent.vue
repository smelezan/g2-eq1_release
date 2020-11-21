<template>
  <div>
    <h1>Create A Task !!!</h1>
    <form @submit.prevent="addTask">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Task Title:</label>
            <input type="text" class="form-control" v-model="task.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Task Definition of Done:</label>
              <textarea class="form-control" v-model="task.dod" rows="5"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Task Issue:</label>
              <div v-for="issue in issues" :key="issue._id" class="Checkbox" >
                <input type="checkbox" />{{issue.title}}<br>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Créer</button>
        </div>
        <span> <router-link to="/tasks"> <button class="btn btn-primary">Cancel</button> </router-link></span>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      issues: {},
      task: {}
    };
  },
  created() {
      this.axios.get(this.$proxy + "/issues").then((response) => {
        this.issues = response.data;
    });
  },
  methods: {
      addTask(){
          this.axios.post("http://localhost:5000/tasks", this.task).then(() => {
            this.$router.push({name: 'tasks'});
          });
      }
  }
};
</script>