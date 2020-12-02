<template>
  <div class="row justify-content-center">
    <div class="col-md-8" style="margin-top: 300px; margin-left: 300px">
      <div class="card card-default">
        <div class="card-header">Home Component</div>

        <div class="card-body">
          <v-btn @click="populate">Populate </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    populate: function () {
      this.axios.post(this.$proxyIssues + "/populate").then((response) => {
        let issues = [];
        response.data.forEach(({ title, _id }) => {
          issues.push({ _id, title });
        });
        this.axios.post(this.$proxyTasks + "/populate", { issues: issues });
      });
      this.axios.post(this.$proxyTests + "/populate");
    },
  },
};
</script>