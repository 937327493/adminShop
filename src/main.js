import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts//给Vue的prototype加入一个$echarts
Vue.config.productionTip = false//关闭生产提示

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
