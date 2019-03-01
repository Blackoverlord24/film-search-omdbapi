import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import store from './Store/store'
import './bootstrap'
import './Filters'
import Layout from './components/Layout/Layout.vue'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(Layout),
}).$mount('#app')
