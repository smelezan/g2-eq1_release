<template>
  <div class="row mt-5">
    <v-col v-for="(item, i) in list" :key="i">
      <component :is="Board" :board_name="list[i]"></component>
    </v-col>
  </div>
</template>

<script>
import Board from "./Board";
export default {
  data() {
    return {
      list: [
        {
          name: "To Do",
          number: "0",
          route: "/tasks",
          action: "/create-task",
          proxy: this.$proxyTasks,
        },
        {
          name: "Doing",
          number: "1",
          route: "/tasks",
          action: "/create-task",
          proxy: this.$proxyTasks,
        },
        {
          name: "Done",
          number: "2",
          route: "/tasks",
          action: "/create-task",
          proxy: this.$proxyTasks,
        },
      ],
      Board,
    };
  },
};
</script>