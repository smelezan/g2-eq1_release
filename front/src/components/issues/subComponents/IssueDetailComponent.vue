<template>
  <div class="main">
    <h3>Modifier l'issue</h3>
    <v-form>
      <v-text-field
        v-model="newTitle"
        label="Titre"
        outlined
        required
        :placeholder="this.title"
      >
      </v-text-field>
      <v-textarea
        outlined
        name="description"
        label="Description"
        :value="description"
      ></v-textarea>
      <v-text-field
        readonly
        label="difficulté"
        :placeholder="difficulty.toString()"
        outlined
      >
      </v-text-field>
      <v-text-field readonly label="priorité" :placeholder="priority" outlined>
      </v-text-field>
      <v-text-field readonly label="Sprint" :placeholder="sprint" outlined>
      </v-text-field>
      <v-btn color="success" class="mr-4" @click="updateIssue">
        Modifier
      </v-btn>

      <v-btn color="error" class="mr-4" @click="cancelIssue"> Cancel </v-btn>
    </v-form>
  </div>
</template>



<script>
export default {
  props: {
    _id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    difficulty: {
      type: Number,
      default: 0,
    },
    priority: {
      type: String,
      default: "To Do",
    },
    sprint: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      newTitle: this.title,
      newDescription: this.description,
      updateIssue: () => {
        let issue = {
          title: this.newTitle,
          description: this.newDescription,
        };
        this.axios.put(this.$proxyIssues + "/issues/" + this._id, issue);
        window.location.reload();
      },
      cancelIssue: () => {
        (this.newTitle = this.title), (this.newDescription = this.description);
      },
    };
  },
};
</script>

<style scoped>
</style>