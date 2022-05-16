import ToolBarItem from "./ToolBarItem";

export default function ToolBarItemItalic(uiPlugin, toolBarItemName ) {
    const toolbarItem = ToolBarItem(uiPlugin, toolBarItemName);

    const button = toolbarItem.querySelector('button')
    button.onclick = onclick;

    const span = document.createElement("span");
    button.appendChild(span);
    span.innerText = 'i';
    span.style.fontStyle = 'italic';

    return toolbarItem;
}

const onclick = (e) => {

}