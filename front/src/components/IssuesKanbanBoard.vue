<template>
    <div class="row mt-5">
        <v-col v-for="(item, i) in list" :key="i">
            <component :is=Board :board_name="list[i]"></component>
        </v-col>
    </div>
</template>

<script>
import Board from "./Board";
export default {
  data() {
    return {
        list: [{name:'BackLog',number:'0',route:'/issues',action:'/create-issue', proxy:this.$proxyIssues}, 
        {name:'To Do',number:'1',route:'/issues',action:'/create-issue', proxy:this.$proxyIssues}, 
        {name:'Doing',number:'2',route:'/issues',action:'/create-issue', proxy:this.$proxyIssues}, 
        {name:'Done',number:'3',route:'/issues',action:'/create-issue', proxy:this.$proxyIssues}],
        Board,
    };
  },
};
</script>