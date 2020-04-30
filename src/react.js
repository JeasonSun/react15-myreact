import $ from 'jquery';
import { createUnit } from './unit';


let React = {
    render,
    rootIndex: 0
}
// 此元素可能是一个文本节点、DOM节点（div）、或者自定义组件
function render(element, container) {

    // container.innerHTML = element;
    // container.innerHTML = `<span data-reactid="${React.rootIndex}">${element}</span>`;
    let unit = createUnit(element);
    let markUp = unit.getMarkUp(React.rootIndex); // 用来返回HTML标记
    $(container).html(markUp);
}



export default React;