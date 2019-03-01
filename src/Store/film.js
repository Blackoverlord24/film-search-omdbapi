import axios from '../axios/axios'

export default {
  state: {
    film: null,
    apiKey: '1977b733',
    is_full_info: false
  },
  mutations: {
    loadFilms(state, film) {
      state.film = film
    },
    changeFullInfoVisible(state) {
      state.is_full_info = !state.is_full_info
    }
  },
  actions: {
    async fetchFilms ({state, commit}, {title, year, plot, type}) {
      commit('setLoading', true)

      try {
        await axios.get(`?apikey=${state.apiKey}&t=${title}&y=${year}&plot=${plot}&type=${type}`)
          .then(response => {
            if(response.data.Response === 'False'){
              commit('loadFilms', null)
            } else {
              commit('loadFilms', response.data)
            }

          })
          .finally(() =>  commit('setLoading', false))
      } catch (e) {
        if(e.response.status === 500){
          commit('setNotification', { type: 'error', text: 'Ошибка сервера.' })
        }else{
          commit('setNotification', { type: 'error', text: 'Неизвестная ошибка.' })
        }

        commit('setLoading', false)
        throw e
      }
    }
  },
  getters: {
    film(state) {
      return state.film
    },
    is_full_info (state) {
      return state.is_full_info
    }
  }
}
