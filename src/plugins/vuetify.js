import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3c82af',
        secondary: '#b15078',
        accent: '#b15078',
        error: '#b71c1c'
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
