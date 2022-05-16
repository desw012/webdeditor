import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemFontSelect( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.classList.add('toolbar-select');
    button.onclick = (e) => {
        const fontSelect = FontSelect(uiPlugin);
        toolbarItem.appendChild(fontSelect);

        fontSelect.addEventListener('focusout', (e)=>{
            if(!(e.relatedTarget && fontSelect.contains(e.relatedTarget)) ){
                toolbarItem.removeChild(fontSelect)
            }
        });
        fontSelect.focus();
    };

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'asd';

    return toolbarItem;
}

const FontSelect = ( uiPlugin ) => {
    const divLayer = document.createElement("div");
    divLayer.className = 'div_layer';
    divLayer.tabIndex = -1;

    const wrap = document.createElement("div");
    divLayer.appendChild(wrap);
    wrap.className = 'layer_select';

    const ul = document.createElement("ul");
    wrap.appendChild(ul);

    uiPlugin.context.config.font.forEach((font)=>{
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