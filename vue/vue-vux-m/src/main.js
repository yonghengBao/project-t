import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import vuex from  'vuex'
import axios from 'axios'//网络请求
import './assets/css/base.less'

Vue.prototype.$axios=axios;
Vue.use(vuex);

FastClick.attach(document.body)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
