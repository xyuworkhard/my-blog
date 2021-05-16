//bind update 实现的功能一样可以简写
import imgSrc from '@/assets/loading.svg'
import style from './dirctives.module.less'
function getLoadingImg(el) {
    return el.querySelector("div[data-role='loading']")
}
function createImg(el) {
    let div = document.createElement('div')

    div.className = style.loadContain
    div.dataset.role = 'loading'
    let img = document.createElement('img')
    img.src = imgSrc

    img.className = style.loading
    div.appendChild(img)
    el.appendChild(div)
}
export default function (el, binding) {
    console.log(el);
    //value值为true创建图片,false删除图片
    let value = binding.value
    if (value) {
        if (!getLoadingImg(el)) {
            createImg(el)
        }

    } else {
        if (getLoadingImg(el)) {
            getLoadingImg(el).remove()
        }

    }

}
// export default {
//     bind(el,binding) {

//     },
//     update(el,binding) {

//     }
// }