<template>
<div class="item">{{ issue.title }}</div>
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