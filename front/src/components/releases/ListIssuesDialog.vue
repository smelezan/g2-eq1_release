<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-icon v-on="on" v-bind="attrs">
              mdi-format-list-bulleted
          </v-icon>
          Il y a {{issues.length}} issues liées à cette release
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Les issues
        </v-card-title>

        <v-card-text>
          <v-list-item v-for="issue in issues" :key="issue">
            <v-list-item-content>
                <v-list-item-title>{{issue}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>


<script>
  export default {
      props:{
          issues:Array
      },
    data () {
      return {
        dialog: false,
      }
    },
    created(){
        console.log(this.issues);
    }
  }
</script>
