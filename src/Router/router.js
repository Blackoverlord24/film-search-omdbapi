import Router from 'vue-router'
import film from '../components/Film/Film'

export default new Router({
  routes: [
    {
      path: '/',
      component: film
    }
  ]
})
