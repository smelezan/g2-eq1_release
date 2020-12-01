<template>
  <tr v-if="title">
    <td><v-badge color="green" dot> </v-badge></td>
    <td>{{ testId }}</td>
    <td>{{ description }}</td>
    <td>
      <router-link to="/issuesRaw">
        {{ title }}
      </router-link>
    </td>
    <td>{{ date }}</td>
    <td>{{ result }}</td>
  </tr>

  <tr v-else>
    <td><v-badge color="red" dot> </v-badge></td>
    <td>{{ testId }}</td>
    <td>{{ description }}</td>
    <td>
      {{ tmptitle }}
    </td>
    <td>{{ date }}</td>
    <td>{{ result }}</td>
  </tr>
</template>


<script>
export default {
  name: "testIndexComponent",
  props: {
    id: {
      type: String,
    },
    testId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
    tmptitle: {
      type: String,
    },
  },
  created() {
    if (this.type === "E2E") {
      this.axios
        .get(this.$proxyIssues + "/issues/" + this.id)
        .then((response) => {
          this.title = response.data.title;
        });
    } else if (this.type === "Unitaire") {
      this.axios
        .get(this.$proxyTasks + "/tasks/" + this.id)
        .then((response) => {
          this.title = response.data.title;
        });
    }
  },

  data() {
    return {
      title: "",
    };
  },

  methods: {
    mapLink() {},
  },
};
</script>