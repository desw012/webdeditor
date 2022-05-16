import ToolBarItem from "./ToolBarItem";

export default function ToolBarSeparator( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.disabled = true;
    button.onclick = onclick;

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = '|';

    return toolbarItem;
}