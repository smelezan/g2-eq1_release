<template>
    <v-app id="inspire">

        <v-main>
            <v-container>
                <h2 style="color:grey">{{$route.params.id}}</h2>
            </v-container>
              <v-tabs>
                <v-tab>Sprints</v-tab>
                <v-tab>Issues</v-tab>
                <v-tab>Tâches</v-tab>
                <v-tab>Releases</v-tab>
                <v-tab>Tests</v-tab>
                <v-tab>Documentations</v-tab>
            </v-tabs>

        </v-main>
    </v-app>
</template>

<script>
    export default {

    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
</style>