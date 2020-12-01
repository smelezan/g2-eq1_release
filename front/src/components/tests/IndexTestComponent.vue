<template>
  <v-app id="inspire">
    <v-card>
      <v-main>
        <div class="v-row">
          <div class="v-col">
            <div class="v-row">
              <v-file-input
                accept="application/JSON"
                label="File input"
                @change="onFileSelected"
              ></v-file-input>
            </div>
            <div class="v-row" v-if="showOnUploadButton">
              <v-btn @click="onUpload">upload</v-btn>
            </div>
            <div class="v-row" v-if="showSendServeButton">
              <v-btn @click="sendToServe">Envoyer</v-btn>
            </div>
          </div>
        </div>

        <div class="v-row">
          <div class="v-col">
            <div class="v-row">
              <div class="v-col">
                <p>nombre de tests Total: {{ totalNumberOfTests }}</p>
                <p>nombre de tests passés: {{ numberOfTestsPassed }}</p>
                <p>nombre de tests ratés: {{ numberOfTestsFailed }}</p>
              </div>
            </div>

            <div class="v-row">
              <div class="v-col">
                <div class="v-row">
                  <div v-if="showSendServeButton">
                    <v-simple-table>
                      <thead>
                        <tr>
                          <th scope="col">linked</th>
                          <th scope="col">Id</th>
                          <th scope="col">Description</th>
                          <th scope="col">Issue/Tâches Liés</th>
                          <th scope="col">dernière exécution</th>
                          <th scope="col">résultat</th>
                        </tr>
                      </thead>
                      <tbody v-if="!processEnd">
                        <tr v-for="(test, counter) in newTests" :key="counter">
                          <td></td>
                          <td>{{ counter }}</td>
                          <td>{{ test.description }}</td>
                          <td>{{ test.title }}</td>
                          <td>{{ tests.stats.start }}</td>
                          <td>{{ test.result }}</td>
                        </tr>
                      </tbody>

                      <tbody v-else-if="processEnd">
                        <TestItemComponent
                          v-for="(test, counter) in serverResponse.correct"
                          :key="counter"
                          :testId="counter.toString()"
                          :id="test.dependance"
                          :description="test.description"
                          :date="
                            test.testedDates[test.testedDates.length - 1].date
                          "
                          :type="test.type"
                          :result="
                            test.testedDates[test.testedDates.length - 1].result
                          "
                        />
                        <TestItemComponent
                          v-for="(test, counter) in serverResponse.wrong"
                          :key="counter + serverResponse.correct.length"
                          :testId="
                            (counter + serverResponse.correct.length).toString()
                          "
                          :description="test.description"
                          :date="new Date().toString()"
                          :tmptitle="test.title"
                          :result="test.result"
                        />
                      </tbody>
                    </v-simple-table>
                    <v-btn @click="saveTests" v-if="processEnd">
                      Save tests</v-btn
                    >
                  </div>
                  <div v-else>
                    {{ message }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-main>
    </v-card>
  </v-app>
</template>


<script>
import TestItemComponent from "./subComponents/TestItemComponent";
export default {
  components: {
    TestItemComponent,
  },
  data() {
    return {
      totalNumberOfTests: 0,
      numberOfTestsPassed: 0,
      numberOfTestsFailed: 0,
      selectedFile: null,
      tests: {},
      testsFromDatabases: [],
      show: false,
      newTests: [],
      finalTest: [],
      processEnd: false,
      showOnUploadButton: false,
      showSendServeButton: false,
      message: "Aucun fichier n'a été passé",
      serverResponse: {},
    };
  },
  created() {},
  methods: {
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event;
      this.showOnUploadButton = true;
    },
    setFile() {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsText(this.selectedFile);
      });
    },
    onUpload() {
      this.setFile().then((jsonFile) => {
        this.tests = JSON.parse(jsonFile);

        try {
          for (let suite of this.tests.suites) {
            let title = suite.title;
            for (let test of suite.tests) {
              this.newTests.push({
                title: title,
                description: test.title,
                result: test.result,
                err: test.err,
              });
            }
            this.show = true;
            this.showSendServeButton = true;
          }
        } catch (error) {
          this.message = " ⚠⚠⚠ Le format du fichier n'est pas bon";
          console.log(error);
        }
      });
    },
    sendToServe() {
      this.axios.get(this.$proxyIssues + "/issues/").then((response) => {
        let issues = response.data;
        this.axios.get(this.$proxyTasks + "/tasks").then((response) => {
          let tasks = response.data;

          this.axios
            .post(this.$proxyTests + "/tests/verifyTest", {
              tests: this.newTests,
              issues: issues,
              tasks: tasks,
            })
            .then((response) => {
              console.log("Send");
              this.serverResponse = response.data;
              this.processEnd = true;
            });
        });
      });
    },
    saveTests() {
      let tests = [
        ...this.serverResponse.correct,
        ...this.serverResponse.wrong,
      ];
      this.axios
        .post(this.$proxyTests + "/tests/saveAllTests", {
          tests: tests,
        })
        .then(() => this.$router.push("/Project/Projet%20CDP/"));
    },
  },
};
</script>

