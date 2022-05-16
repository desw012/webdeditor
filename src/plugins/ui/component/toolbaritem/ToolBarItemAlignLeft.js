import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemAlignLeft( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = onclick;

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'L';

    return toolbarItem;
}

const onclick = (e) => {

}