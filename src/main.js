import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import router from './Router/router'
import store from './Store/store'
import './bootstrap'
import Layout from './components/Layout/Layout.vue'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Layout),
}).$mount('#app')
