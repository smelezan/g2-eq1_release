<template>
  <v-card>
    <v-card-text>
      {{ issue.title }}
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "IssueItemComponent",
  props: {
    id: String,
  },
  data() {
    return {
      issue: {},
    };
  },
  created() {
    this.axios
      .get(this.$proxyIssues + "/issues/" + this.id)
      .then((response) => (this.issue = response.data));
  },
};
</script>