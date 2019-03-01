export default {
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, isLoading) {
      state.loading = isLoading
    }
  },
  actions: {
    setLoading ({commit}, isLoading) {
      commit('setLoading', isLoading)
    }
  },
  getters: {
    loading (state) {
      return state.loading
    }
  }
}
