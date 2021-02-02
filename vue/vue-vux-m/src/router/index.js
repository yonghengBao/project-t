import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>import ( '@/components/Home').then(vueIeam => { return vueIeam.default});
const NotFound = () =>import ( '@/components/error/404').then(vueIeam => { return vueIeam.default});

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{allowBack: false,title:"首页"},
      component: Home
    },{
      path: '/home',
      name: 'Home',
      meta:{allowBack: false,title:"首页"},
      component: Home
    },{
      path:'**',
      component:NotFound
    }
  ]
})
