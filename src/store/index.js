import Vue from 'vue'
import Vuex from 'vuex'
import banner from './banner'
import setting from './setting'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        banner: banner,
        setting
    }
})
