import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemBackgroundColor(uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = (e) => {
        const colorSelect = ColorSelect(uiPlugin);
        toolbarItem.appendChild(colorSelect);

        colorSelect.addEventListener('focusout', (e)=>{
            if(!(e.relatedTarget && colorSelect.contains(e.relatedTarget)) ){
                toolbarItem.removeChild(colorSelect)
            }
        });
        colorSelect.focus();
    }

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'T';

    return toolbarItem;
}

const ColorSelect = ( uiPlugin ) => {
    const divLayer = document.createElement("div");
    divLayer.className = 'div_layer';
    divLayer.tabIndex = -1;

    const wrap = document.createElement("div");
    divLayer.appendChild(wrap);
    wrap.className = 'layer_color_select';

    uiPlugin.context.config.color.forEach((color)=>{
        const item = document.createElement("div");
        item.style.backgroundColor = color;
        wrap.appendChild(item);

        const button = document.createElement("button");
        button.value = color;
        item.appendChild(button);
    });

    return divLayer;
}