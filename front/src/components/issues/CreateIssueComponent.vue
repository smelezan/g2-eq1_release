<template>
    <v-app id="inspire">
        <v-main>
            <v-container>
                <h1>Créer une issue</h1>
                <form @submit.prevent="addIssue">
                  <v-row>
                    <v-col md="6">
                      <v-form>
                        <v-text-field
                          label="Titre"
                          required
                          v-model="issue.title"
                        ></v-text-field>
                      </v-form>
                    </v-col>
                  </v-row>
                    <v-row>
                      <v-col md="6">
                        <v-form>
                          <v-textarea
                            label="Description"
                            required
                            v-model="issue.description"
                            auto-grow
                          ></v-textarea>
                        </v-form>
                      </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="4"> 
                          <v-form>
                              <v-select 
                              v-model="issue.type"
                              :items="types" 
                              label="types"
                              required >
                              </v-select>
                          </v-form>
                        </v-col>
                    </v-row>
                    <div class="form-group">
                      <v-btn @click = "addIssue">Créer</v-btn>
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
          this.axios.post(this.$proxyIssues+'/issues', this.issue).then(() => {
            this.$router.push({path: "/issuesRaw"});
          });
      }
    }
  }
</script>