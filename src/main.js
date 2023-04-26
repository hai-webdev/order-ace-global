// import "./mock";
import "@/styles/reset.css"
import "@/styles/fonts.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "amfe-flexible";
// 使用element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 使用wowjs
import 'wowjs/css/libs/animate.css'
import wow from 'wowjs'
Vue.prototype.$wow = wow

// 注册全局指令
import vLoading from "./directive/loading/index";
Vue.directive("loading", vLoading);


// 引入api
import api from "@/api";
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
