<template>
  <v-app id="talli">
    <v-navigation-drawer
      v-model="drawer" app
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="primary" block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title class="headline text-uppercase">
        <span>/r/tea</span>
        <span class="font-weight-light"> vendor vote</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-layout row wrap>
        <v-spacer></v-spacer>
        <v-flex class="main">
          <router-view/>
        </v-flex>
        <v-spacer></v-spacer>
      </v-layout>
    </v-content>
    <v-footer
      color="primary"
      app
    >
      <v-spacer></v-spacer>
      <span class="white--text overline">made by <a class="white--text" href="https://github.com/reddit-tea/">/r/tea contributors</a> &copy; 2019</span>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'mdi-home', link: '/' },
        { title: 'Vote', icon: 'mdi-vote', link: 'vote' },
        { title: 'Admin', icon: 'mdi-gavel', link: 'about' }
      ]
    }
  }
}
</script>

<style scoped>
  .main {
    width: 70%;
    max-width: 1000px;
  }
</style>
