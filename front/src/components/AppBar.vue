<template>
  <div>
    <v-app-bar
      app
      color="#FFFFFF"
      height="95px"
      rounded
      flat
    >
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-autocomplete
      class="mx-auto rounded-xl"
      flat
      label="Rechercher ..."
      solo-inverted
    ></v-autocomplete>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <v-avatar
        style="margin-left:15px"
        color="primary"
        size="56"
      >
      <img
        alt="Avatar"
        src="https://images.unsplash.com/photo-1581093686959-108b3114cc49?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjcyMDE3fQ&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=56"
      >
      </v-avatar>
    </v-app-bar>
  </div>
</template>