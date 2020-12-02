<template>
  <v-card>
    <v-card-text v-if="difficulty != undefined">
      <v-badge color="blue" :content="difficulty">
        {{ title }}
      </v-badge>
    </v-card-text>
    <v-card-text v-else-if="priority !== undefined">
      <v-badge :color="color">
        {{ title }}
      </v-badge>
    </v-card-text>
    <v-card-text v-else>
      {{ title }}
    </v-card-text>
  </v-card>
</template>




<script>
export default {
  name: "IssueSummary",
  props: {
    title: String,
    difficulty: Number,
    priority: String,
  },
  data() {
    return {};
  },

  methods: {},
  computed: {
    color() {
      if (this.priority == "HIGH") return "red";
      else if (this.priority == "MEDIUM") return "orange";
      else if (this.priority == "LOW") return "yellow";
      return "blue";
    },
  },
};
</script>