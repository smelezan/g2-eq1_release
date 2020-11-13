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
              <textarea class="form-control" v-model="task.description" rows="5"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Task Issue:</label>
              <select id ="Issue Select">
                <option value=""> -- Choose an Issue -- </option>
                <option v-for="issue in issues" :key="issue._id" value="issue._id" >{{issue.title}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Créer</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          task:{},
          types: [
              'Feature',
              'Documentation'
          ]
        }
    },
    methods: {
      addTask(){
        console.log(this.task)
        //   this.axios.post(this.$proxy+'/issues', this.issue).then(() => {
        //     this.$router.push({name: 'issues'});
        //   });
      }
    }
  }
</script>