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
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title class="headline text-uppercase">
        <span>/r/tea</span>
        <span class="font-weight-light"> vendor vote</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      color="green"
      app
    >
      <span class="white--text">made by /r/tea contributors &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-home', link: '/' },
        { title: 'Account', icon: 'mdi-account-box', link: 'about' },
        { title: 'Admin', icon: 'mdi-gavel', link: 'nothing' }
      ]
    }
  }
}
</script>
