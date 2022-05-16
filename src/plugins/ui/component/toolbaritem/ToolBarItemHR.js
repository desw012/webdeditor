import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemHR( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = onclick;

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'HR';

    return toolbarItem;
}

const onclick = (e) => {

}