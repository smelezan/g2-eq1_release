<template>
    <div class="container">
        <div class="row">
            <input type="file" @change="onFileSelected">
            <button @click="onUpload">Upload</button>
            <button v-if="showSendServeButton" class="btn btn-primary" @click="sendToServe"> Send to serve</button>
        </div>
        <div class="row" v-if="show || testsFromDatabases.length>0">
            <div class="col">
                
                <div class="row" > 
                    <div class="col">
                        <p>nombre de tests Total: {{totalNumberOfTests}}</p>
                        <p>nombre de tests passés: {{numberOfTestsPassed}}</p>
                        <p>nombre de tests ratés: {{numberOfTestsFailed}}</p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Issue/Tâches Liés</th>
                                    <th scope="col">dernière exécution</th>
                                    <th scope="col">résultat</th>
                                    </tr>
                                </thead> 
                                <tbody v-if="testsFromDatabases.length>0 && !processEnd">
                                    <TestItemComponent 
                                        v-for="(test) in testsFromDatabases" 
                                        :key="test._id" 
                                        :testId="test._id"
                                        :id="test.dependance[0]"
                                        :description="test.description"
                                        :date="test.testedDates[test.testedDates.length-1].date"
                                        :type="test.type"
                                        :result="test.testedDates[test.testedDates.length-1].result" />
                                </tbody>
                                <tbody v-else-if="!processEnd">

                                    <tr  v-for="(test,counter) in newTests" :key="counter">
                                        <td>{{counter}}</td>
                                        <td>{{test.description}}</td>
                                        <td>{{test.title}}</td>
                                        <td>{{tests.stats.start}}</td>
                                        <td>{{test.result}}</td>
                                    </tr>
                                </tbody>
                                <tbody v-else-if='processEnd'>
                                    <TestItemComponent 
                                        v-for="(test) in finalTest" 
                                        :key="test._id" 
                                        :testId="test._id"
                                        :id="test.dependance[0]"
                                        :description="test.description"
                                        :date="test.testedDates[test.testedDates.length-1].date"
                                        :type="test.type"
                                        :result="test.testedDates[test.testedDates.length-1].result" />
                                </tbody>
                                    
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import TestItemComponent from './subComponents/TestItemComponent'
export default {
    components: {
        TestItemComponent
    },
    data(){
        return{
            totalNumberOfTests:0,
            numberOfTestsPassed:0,
            numberOfTestsFailed:0,
            selectedFile: null,
            tests :{},
            testsFromDatabases:[],
            show:false,
            newTests: [],
            finalTest:[],
            processEnd:false,
            showSendServeButton:true
        }
    },
    created(){
        this.axios.get(this.$proxyTests+'/tests/')
            .then(response => {
                this.testsFromDatabases = response.data;
                this.totalNumberOfTests = this.testsFromDatabases.length;
                this.testsFromDatabases.forEach(test=> (test.result=="passed")? this.numberOfTestsPassed ++ : this.numberOfTestsFailed ++);
            }
            );
    },
    methods:{
        onFileSelected(event){
            this.selectedFile = event.target.files[0];
        },
        setFile(){
            const reader = new FileReader();
            return new Promise((resolve,reject)=>{
                reader.onload = event=> resolve(event.target.result);
                reader.onerror = error => reject(error);
                reader.readAsText(this.selectedFile);
            });
        },
        onUpload(){
            this.setFile()
            .then(jsonFile =>{
                this.tests = JSON.parse(jsonFile);
                this.show=true;
                for(let suite of this.tests.suites){
                    let title = suite.title;
                    for(let test of suite.tests){
                        this.newTests.push({
                            title: title,
                            description: test.title,
                            result: test.result,
                            err: test.err
                        });
                    }
                }
            });
            this.showSendServeButton = true;
        },
        sendToServe(){
            this.axios.get(this.$proxyIssues+'/issues/')
                .then(response =>{
                    let issues = response.data;
                    this.axios.get(this.$proxyTasks+'/tasks')
                        .then(response=>{
                            let tasks = response.data;
                            this.axios.post(this.$proxyTests+'/tests/verifyTest',{tests: this.newTests, issues:issues, tasks:tasks})
                                .then(response =>{
                                    this.finalTest = response.data; 
                                    console.log(this.finalTest);                                                                  
                                })
                        })
                });
            this.processEnd=true;
        }


    }
}
</script>

