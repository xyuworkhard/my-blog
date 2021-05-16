import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
//mock 数据
import '@/mock/index'
//弹窗全局方法
import showMessage from './utils/showMessage'
Vue.prototype.$message = showMessage


import Loading from './directives/loading'
Vue.directive('loading', Loading)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
