import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
//mock 数据
import '@/mock/index'
//弹窗全局方法
import showMessage from './utils/showMessage'
Vue.prototype.$message = showMessage

//事件总线
import './eventBus.js'
import Loading from './directives/loading'
import Lazy from './directives/lazy'
Vue.directive('loading', Loading)
Vue.directive('lazy', Lazy)
import store from '@/store'
store.dispatch("setting/fetchSetting");
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
