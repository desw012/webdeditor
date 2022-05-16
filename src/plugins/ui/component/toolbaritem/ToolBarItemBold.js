import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemBold( uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = onclick;

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'B';
    span.style.fontWeight = 'bold';

    return toolbarItem;
}

const onclick = (e) => {

}