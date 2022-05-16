import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemLink( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = onclick;

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = '_L';

    return toolbarItem;
}

const onclick = (e) => {

}