<template>
    <v-content
      style="padding: 0px 0px 7px 0px;"  
    >
    <template>
    <v-card
      color="#FFFFFF"
      dark
      max-width="400"
      height="200"
    >
      <v-card-title>
        <v-icon
        color="grey"
          large
          left
        >
          mdi-briefcase-outline
        </v-icon>

        <span class="title font-weight-light" style="color:grey">{{Project_Name}}</span>
      
        <v-layout align-end justify-end>
          <v-icon
            color="yellow"
        >mdi-alert-outline</v-icon>
          <v-icon
            color="grey"
          >mdi-dots-vertical</v-icon>
        </v-layout>
            
      </v-card-title>

      <v-card-actions>
        <v-list-item
        style=" bottom:-40px" 
        >
          <v-list-item-avatar color="grey darken-3">
            <v-img
              src="https://images.unsplash.com/photo-1581093686959-108b3114cc49?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjcyMDE3fQ&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=56"
            ></v-img>
            
          </v-list-item-avatar>
<!-- 
          <v-list-item-avatar color="grey darken-3">
            <v-img
              src="https://avataaars.io"
            ></v-img>
            
          </v-list-item-avatar> -->

          

        </v-list-item>
      </v-card-actions>

      <v-progress-linear
                  style=" bottom:-40px"
                  color="#76D72B"
                  buffer-value="0"
                  value="1"
                  ltr
      ></v-progress-linear>

      </v-card>
      </template>
    </v-content>
</template>

<script>
export default {
  props: ['Project_Name'],
}
</script>