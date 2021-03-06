// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入axios
import axios from 'axios'
//引入图形font-awesome.min.css
import 'font-awesome/css/font-awesome.min.css'
// 集成jquery
import $ from 'jquery'

//将 axios 改写为 Vue 的原型属性
Vue.prototype.$http = axios

//引入全局过滤器
import * as filters from './filter/index.js'  
//注册全局过滤器
Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key])  
})  

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
