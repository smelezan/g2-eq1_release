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
        list: [{name:'BackLog',number:'0',route:'/tasks'}, {name:'TODO',number:'1',route:'/tasks'}, {name:'DOING',number:'2',route:'/tasks'}, {name:'DONE',number:'3',route:'/tasks'}],
        Board,
    };
  },
};
</script>