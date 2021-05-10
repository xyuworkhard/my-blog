import Vue from 'vue'
/**
 * 
 * @param {*} comp 组件实例
 * @param {Object}} props 组件属性
 */
export default function (comp, props) {
    let vm = new Vue({
        render: h => h(comp, { props })
    }).$mount()
    return vm.$el
}
// export default function (comp, propData) {
//     let vm=new Vue({
//         render:h=>h(comp,{props:propData})
//     }).$mount()
//     return vm.$el
// }