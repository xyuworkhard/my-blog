import getComponentDom from './getDomFromComponent'
import Icon from '@/components/Icon'
import style from './message.module.less'

/**
 * 
 * @param {*} context 弹窗文本
 * @param {*} type 弹窗类型
 * @param {*} duration 持续时间
 * @param {*} container 相对容器
 */
export default function (config = {}) {
    let context = config.context || '';
    let type = config.type || 'info';
    let duration = config.duration || 2000;
    let container = config.container || document.body;
    //创建元素
    let div = document.createElement('div');
    div.className = `${style.message} ${style['message-' + type]}`;
    //组件转换为Dom元素
    let getIconDom = getComponentDom(Icon, { type })
    div.innerHTML = `<span class="${style.icon}">${getIconDom.outerHTML}</span><span>${context}</span>`
    if (config.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative'
        }
    }
    container.appendChild(div)
    //浏览器强制渲染（解决异步渲染，直接执行最终css导致没有动画）
    div.clientHeight;
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`
        div.addEventListener(
            "transitionend",
            function () {
                div.remove();
                // 运行回调函数
                config.callback && config.callback();
            },
            { once: true }
        );
    }, duration)
}