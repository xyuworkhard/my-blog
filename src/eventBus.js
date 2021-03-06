
//{event1:[handle1,handle2,...]}
//方案 1
// let listeners = {}
// export default {
//     //监听事件
//     $on(eventName, handleEvent) {
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set()
//         }
//         listeners[eventName].add(handleEvent)
//     },
//     //取消监听
//     $off(eventName, handleEvent) {
//         if (!listeners[eventName]) {
//             return
//         }
//         listeners[eventName].delete(handleEvent)
//     },
//     //触发事件并通知监听者
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             return
//         }
//         for (const handle of listeners[eventName]) {
//             handle(...args)
//         }
//     }
// }


//方案 2
import Vue from 'vue'
//scrollContainer监听滚动事件
let app = new Vue({})
Vue.prototype.$bus = app//全局组件使用，绑定在原型上

export default app//导出供其他js使用