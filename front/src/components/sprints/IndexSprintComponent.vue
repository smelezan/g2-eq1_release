<template>
  <div>
      <h1>Sprints</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <button v-on:click="sprint=!sprint" class="btn btn-primary">Ajouter un Sprint</button>
          </div>
        </div><br />
  
        <table class="table table-hover" v-if="!sprint">
            <thead>
            <tr>
              <th>Non assignée(s):</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="issue in issues" :key="issue._id">
                  <td>{{ issue.title }}</td>
                  <td>{{ issue.description }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: issue._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>

        <DatePicker v-if="sprint" @values="viewUpdate($event)" />

  </div>
</template>

<script>
  import DatePicker from "../Shared/DatePicker";
  export default {
      components : {
        DatePicker,
      },

      data() {
        return {
          sprint : false,
          issues : {}
        }
      },

      methods: {
        viewUpdate(data) {
          console.log(data);
          this.sprint=!this.sprint;
        }
      },

      created() {
        let uri= '';
        if (process.env.VUE_APP_ISSUEADDRESS){
          uri = `http://${process.env.VUE_APP_ISSUEADDRESS}:4000/issues`;
        }
        else{
          
          uri = `http://localhost:4000/issues`;
        }
      this.axios.get(uri).then(response => {
        this.issues = response.data;
      });
    }
  }
</script>