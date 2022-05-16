export default function ToolBarItem( uiPlugin, toolBarItemName ) {
    const toolbarItem = document.createElement('li');

    const button = document.createElement("button");
    toolbarItem.appendChild(button);
    button.id = toolBarItemName;
    button.className = 'toolbar-item';
    button.type = 'button';
    button.title = toolBarItemName;
    button.onclick = onclick;

    return toolbarItem;
}