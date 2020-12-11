<template>
  <td>
    <a
      class="a"
      style="text-decoration: none; color: black"
      href="http://google.com"
    >
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            class="stateIcon"
            v-if="issue.status != 'CLOSED'"
            v-bind="attrs"
            v-on="on"
            >mdi-progress-alert</v-icon
          >
          <v-icon
            class="stateIcon"
            v-else
            v-bind="attrs"
            v-on="on"
            style="color: green"
            >mdi-alert-circle-check-outline</v-icon
          >
        </template>
        <span v-if="issue.status != 'CLOSED'">issue ouverte</span>
        <span v-else>issue terminée</span>
      </v-tooltip>
      {{ issue.title }}
    </a>
  </td>
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