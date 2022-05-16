import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemTableSelect( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = (e) => {
        const tableSelect = TableSelect(uiPlugin);
        toolbarItem.appendChild(tableSelect);

        tableSelect.addEventListener('focusout', (e)=>{
            if(!(e.relatedTarget && tableSelect.contains(e.relatedTarget)) ){
                toolbarItem.removeChild(tableSelect)
            }
        });
        tableSelect.focus();
    }

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'T';

    return toolbarItem;
}

const TableSelect = ( uiPlugin ) => {
    const divLayer = document.createElement("div");
    divLayer.className = 'div_layer';
    divLayer.tabIndex = -1;

    const wrap = document.createElement("div");
    divLayer.appendChild(wrap);
    wrap.className = 'layer_table_select';

    const labelWrap = document.createElement("div");
    divLayer.appendChild(labelWrap);

    const label = document.createElement("span");
    label.innerText = '0 x 0';
    labelWrap.appendChild(label);

    const mouseover = (e) => {
        const json = JSON.parse(e.currentTarget.value);
        label.innerText = `${json.row} x ${json.col}`;

        const gridItemList = wrap.querySelectorAll('div');

        for( let row  = 0; row < 10; row++ ){
            for( let col  = 0; col < 10; col++ ){
                const gridItem = gridItemList[row * 10 + col]
                if(row < json.row && col < json.col){
                    if(!gridItem.classList.contains('active')){
                        gridItem.classList.add('active');
                    }
                }else {
                    if(gridItem.classList.contains('active')) {
                        gridItem.classList.remove('active');
                    }
                }
            }
        }
    }

    for(let row = 1; row <= 10; row++){
        for(let col = 1; col <= 10; col++){
            const item = document.createElement("div");
            wrap.appendChild(item);

            const button = document.createElement("button");
            button.value = `{"row" : ${row}, "col" : ${col}}`;
            button.addEventListener('mouseover', mouseover);
            item.appendChild(button);
        }
    }



    return divLayer;
}