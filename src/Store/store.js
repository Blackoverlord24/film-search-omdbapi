import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared'
import Films from './film'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {shared, Films}
})
