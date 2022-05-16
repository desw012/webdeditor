import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemSymbolSelect( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = (e) => {
        const symbolSelect = SymbolSelect(uiPlugin);
        toolbarItem.appendChild(symbolSelect);

        symbolSelect.addEventListener('focusout', (e)=>{
            if(!(e.relatedTarget && symbolSelect.contains(e.relatedTarget)) ){
                toolbarItem.removeChild(symbolSelect)
            }
        });
        symbolSelect.focus();
    }

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'T';

    return toolbarItem;
}

const SymbolSelect = ( uiPlugin ) => {
    const divLayer = document.createElement("div");
    divLayer.className = 'div_layer';
    divLayer.tabIndex = -1;

    const wrap = document.createElement("div");
    divLayer.appendChild(wrap);
    wrap.className = 'layer_symbol_select';

    uiPlugin.context.config.symbol.forEach((symbol)=>{
        const item = document.createElement("div");
        wrap.appendChild(item);

        const button = document.createElement("button");
        item.appendChild(button);
        button.value = symbol;

        const span = document.createElement("span");
        button.appendChild(span);
        span.innerText = symbol;

    });

    return divLayer;
}