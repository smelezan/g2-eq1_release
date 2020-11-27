<template>
    <tr>
        <td>{{testId}}</td>
        <td>{{description}}</td>
        <td>
            <router-link to="/issuesRaw">
                {{title}}
            </router-link>
        </td>
        <td>{{date}}</td>
        <td>{{result}}</td>
    </tr>
</template>


<script>
export default {
    name: "testIndexComponent",
    props: {
        id: {
            type: String,
            required: true
        },
        testId:{
            type: String,
            required: true
        },
        description:{
            type:String,
            required: true
        },
        date:{
            type:String,
            required: true
        },
        result:{
            type:String,
            required: true
        },
        type:{
            type:String,
            required:true
        }

    },
    created() {
        if(this.type==="E2E"){
            this.axios.get(this.$proxyIssues+'/issues/'+this.id).then(response => {this.title= response.data.title});
                
        }
        else{
            this.axios.get(this.$proxyTasks+'/tasks/'+this.id).then(response => {this.title= response.data.title});
        }
    },

    data(){
        return {
            title:''
                
        }
    },

    methods:{
        mapLink(){
           
        }
    }
}
</script>