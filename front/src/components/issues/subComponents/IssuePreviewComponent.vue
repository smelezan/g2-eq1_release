<template>
  <v-card>
    <v-card-title>{{ title }} </v-card-title>
    <v-card-text>
      <v-progress-linear :value="progress" />
    </v-card-text>
    <v-card-actions>
      <DeleteButtonComponent :id="id" />
    </v-card-actions>
  </v-card>
</template>



<script>
import DeleteButtonComponent from "./DeleteButtonComponent";
export default {
  name: "IssuePreviewComponent",
  components: {
    DeleteButtonComponent,
  },
  props: {
    id: String,
    title: String,
    progression: Number,
    warnings: [String],
  },
  data() {
    return {
      progress: 0,
    };
  },

  created: function () {
    this.axios
      .get(this.$proxyTasks + "/tasks/issues/" + this.id)
      .then((response) => {
        const tasks = response.data;
        let totalTasksComplete = 0;
        for (let task of tasks) {
          if (task.status.toUpperCase() === "DONE") totalTasksComplete++;
        }
        if (tasks != []) {
          this.progress = (totalTasksComplete * 100) / tasks.length;
        }
      });
  },

  methods: {
    deleteIssue() {
      this.$emit("delete-issue", {
        id: this.id,
      });
    },
  },
};
</script>