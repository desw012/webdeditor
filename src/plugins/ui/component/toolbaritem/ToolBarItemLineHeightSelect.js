import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemLineHeightSelect( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.classList.add('toolbar-select');
    button.onclick = (e) => {
        const lineHeightSelect = LineHeightSelect(uiPlugin);
        toolbarItem.appendChild(lineHeightSelect);

        lineHeightSelect.addEventListener('focusout', (e)=>{
            if(!(e.relatedTarget && lineHeightSelect.contains(e.relatedTarget)) ){
                toolbarItem.removeChild(lineHeightSelect)
            }
        });
        lineHeightSelect.focus();
    };

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'asd';

    return toolbarItem;
}

const LineHeightSelect = ( uiPlugin ) => {
    const divLayer = document.createElement("div");
    divLayer.className = 'div_layer';
    divLayer.tabIndex = -1;

    const wrap = document.createElement("div");
    divLayer.appendChild(wrap);
    wrap.className = 'layer_select';

    const ul = document.createElement("ul");
    wrap.appendChild(ul);

    uiPlugin.context.config.lineHeight.forEach((font)=>{
        const li = document.createElement("li");
        ul.appendChild(li);

        const button = document.createElement("button");
        li.appendChild(button);
        button.onclick = onclick;

        const span = document.createElement("span");
        button.appendChild(span);
        span.style.fontFamily = font;
        span.innerText = font;
    });

    return divLayer;
}