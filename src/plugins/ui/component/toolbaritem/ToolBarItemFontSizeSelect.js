import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemFontSizeSelect( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.classList.add('toolbar-select');
    button.onclick = (e) => {
        const fontSizeSelect = FontSizeSelect(uiPlugin);
        toolbarItem.appendChild(fontSizeSelect);

        fontSizeSelect.addEventListener('focusout', (e)=>{
            if(!(e.relatedTarget && fontSizeSelect.contains(e.relatedTarget)) ){
                toolbarItem.removeChild(fontSizeSelect)
            }
        });
        fontSizeSelect.focus();
    };

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'asd';

    return toolbarItem;
}

const FontSizeSelect = ( uiPlugin ) => {
    const divLayer = document.createElement("div");
    divLayer.className = 'div_layer';
    divLayer.tabIndex = -1;

    const wrap = document.createElement("div");
    divLayer.appendChild(wrap);
    wrap.className = 'layer_select';

    const ul = document.createElement("ul");
    wrap.appendChild(ul);

    uiPlugin.context.config.fontsize.forEach((fontSize)=>{
        const li = document.createElement("li");
        ul.appendChild(li);

        const button = document.createElement("button");
        li.appendChild(button);
        button.onclick = onclick;

        const span = document.createElement("span");
        button.appendChild(span);
        span.style.fontSize = fontSize;
        span.innerText = fontSize;
    });

    return divLayer;
}

