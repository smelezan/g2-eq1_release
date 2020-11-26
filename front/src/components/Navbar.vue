<template>
  <v-card>
      <v-navigation-drawer permanent floating
        color="#F8F8FF"
        app
      >
      <div 
        style=" height: 99%; border-radius:20px; background: #FFFFFF;overflow:hidden">
        <v-img
            src="@/assets/applogo.png"
            height="9%"
        ></v-img>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item class="title"
              v-for="item in items"
              :to="item.link"
              :key="item.title"
            >
              <v-list-item-icon>
                <v-icon style="position:relative; top:-4px">{{ item.icon }}</v-icon>
              </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>

                  <v-list-item 
                    v-for="(item,i) in item.subtitles"
                    :to="item.link" 
                    :key="i"
                    link
                  >
                <v-list-item-title 
                  style="color:grey" 
                  v-text="item.name"
                  ></v-list-item-title>
              </v-list-item>

              </v-list-item-content>

            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Menu', icon: 'mdi-menu', subtitles: [{'name': 'Home','link': '/'},{'name': 'Mes tâches','link': '/tasks'},{'name': 'Notifications','link': '/notifications'}]},
          { title: 'Projets', icon: 'mdi-briefcase', subtitles: [] },
          { title: 'Gestion des tests', icon: 'mdi-test-tube',subtitles: [], link: '/Project/Projet CDP/Tests/4'},
        ],
        mini: false,
      }
    },
  }
</script>
