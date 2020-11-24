<template>
    <v-app id="inspire">

        <v-main>
            <v-container>
                <h1>Create An Issue !!!</h1>
                <h2 style="color:grey">for {{this.$proxy}}</h2>
                <form @submit.prevent="addIssue">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Issue Title:</label>
                        <input type="text" class="form-control" v-model="issue.title">
                      </div>
                    </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Issue description:</label>
                          <textarea class="form-control" v-model="issue.description" rows="5"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label for="inputState">Type</label>
                            <select id="inputState" class="form-control" v-model="issue.type">
                                <option v-for="n in types.length " :key="n">{{types[n-1]}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                      <button class="btn btn-primary">Créer</button>
                    </div>
                </form>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data(){
        return {
          issue:{},
          types: [
              'feature',
              'documentation'
          ]
        }
    },
    methods: {
      addIssue(){
        console.log(this.$route.params.id)
          this.axios.post(this.$proxy+'/issues', this.issue).then(() => {
            this.$router.push({path: "/Project/"+this.$route.params.id});
          });
      }
    }
  }
</script>