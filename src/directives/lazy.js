import eventBus from '@/eventBus'
import { debounce } from '@/utils'
import loadGif from '@/assets/load.gif'
let imgs = []
function setImage(img) {

    img.dom.src = loadGif
    //是否在可视区域
    const clientHeight = document.documentElement.clientHeight;
    const ract = img.dom.getBoundingClientRect();
    let height = ract.height || 150
    if (ract.top >= -height && ract.top <= clientHeight) {
        console.log(img.dom, ract.top, clientHeight);
        // let newImg = new Image();
        // newImg.onload = function () {
        //     img.dom.src = img.src
        // }
        // newImg.src = img.src
        img.dom.src = img.src
        imgs = imgs.filter(item => item !== img)
    }
}
function setImages() {
    for (const img of imgs) {
        setImage(img)
    }

}
function handleImg() {
    setImages()
}
eventBus.$on('scrollContainer', debounce(handleImg, 100))
export default {

    inserted(el, bindings) {
        let domInfo = {
            dom: el,
            src: bindings.value
        }
        imgs.push(domInfo)
        setImage(domInfo)
    },
    unbind(el) {
        imgs = imgs.filter(item => item.dom !== el)
    }
}