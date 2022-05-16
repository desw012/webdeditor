import { COMPONENT_IDS } from "../constants";
import { TOOLBAR_ITEMS } from '../../../constants'
import ToolBarSeparator from "./toolbaritem/ToolBarSeparator";
import ToolBarItemFontSelect from "./toolbaritem/ToolBarItemFontSelect";
import ToolBarItemFontSizeSelect from "./toolbaritem/ToolBarItemFontSizeSelect";
import ToolBarItemBold from "./toolbaritem/ToolBarItemBold";
import ToolBarItemItalic from "./toolbaritem/ToolBarItemItalic";
import ToolBarItemUnderline from "./toolbaritem/ToolBarItemUnderline";
import ToolBarItemFontColor from "./toolbaritem/ToolBarItemFontColor";
import ToolBarItemBackgroundColor from "./toolbaritem/ToolBarItemBackgroundColor";
import ToolBarItemAlignLeft from "./toolbaritem/ToolBarItemAlignLeft";
import ToolBarItemAlignCenter from "./toolbaritem/ToolBarItemAlignCenter";
import ToolBarItemAlignRight from "./toolbaritem/ToolBarItemAlignRight";
import ToolBarItemListOrder from "./toolbaritem/ToolBarItemListOrder";
import ToolBarItemListUnOrder from "./toolbaritem/ToolBarItemListUnOrder";
import ToolBarItemIndent from "./toolbaritem/ToolBarItemIndent";
import ToolBarItemOutdent from "./toolbaritem/ToolBarItemOutdent";
import ToolBarItemLineHeightSelect from "./toolbaritem/ToolBarItemLineHeightSelect";
import ToolBarItemSymbolSelect from "./toolbaritem/ToolBarItemSymbolSelect";
import ToolBarItemHR from "./toolbaritem/ToolBarItemHR";
import ToolBarItemLink from "./toolbaritem/ToolBarItemLink";
import ToolBarItemTableSelect from "./toolbaritem/ToolBarItemTableSelect";
import ToolBarItemImageSelect from "./toolbaritem/ToolBarItemImageSelect";
import ToolBarItemWord from "./toolbaritem/ToolBarItemWord";

export default function ToolBar( uiPlugin ) {
    const toolbar = document.createElement("div");
    toolbar.id = COMPONENT_IDS.ID_EDITOR_TOOLBAR;

    if(uiPlugin.context.config.toolbar.length > 0){
        const itemGroup = document.createElement("ul");
        toolbar.appendChild(itemGroup);

        uiPlugin.context.config.toolbar.forEach((toolBarItemName) => {
            const toolBarItem = getToolBarItem(uiPlugin, toolBarItemName);
            if(toolBarItem) itemGroup.appendChild(toolBarItem);
        })

    }

    return toolbar;
}

const getToolBarItem = (uiPlugin, toolBarItemName) => {
    switch (toolBarItemName){
        case TOOLBAR_ITEMS.SEPARATOR:
            return ToolBarSeparator(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.FONT_SELECT:
            return ToolBarItemFontSelect(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.FONTSIZE_SELECT:
            return ToolBarItemFontSizeSelect(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.BOLD:
            return ToolBarItemBold(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.ITALIC:
            return ToolBarItemItalic(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.UNDERLINE:
            return ToolBarItemUnderline(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.FONTCOLOR_SELECT:
            return ToolBarItemFontColor(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.BACKGROUNDCOLOR_SELECT:
            return ToolBarItemBackgroundColor(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.ALIGN_LEFT:
            return ToolBarItemAlignLeft(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.ALIGN_CENTER:
            return ToolBarItemAlignCenter(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.ALIGN_RIGHT:
            return ToolBarItemAlignRight(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.LIST_ORDERED:
            return ToolBarItemListOrder(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.LIST_UNORDERED:
            return ToolBarItemListUnOrder(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.INDENT:
            return ToolBarItemIndent(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.OUTDENT:
            return ToolBarItemOutdent(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.LINE_HEIGHT_SELECT:
            return ToolBarItemLineHeightSelect(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.SYMBOL_SELECT:
            return ToolBarItemSymbolSelect(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.HR:
            return ToolBarItemHR(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.LINK:
            return ToolBarItemLink(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.TABLE_SELECT:
            return ToolBarItemTableSelect(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.IMAGE_SELECT:
            return ToolBarItemImageSelect(uiPlugin, toolBarItemName);
        case TOOLBAR_ITEMS.OPEN_WORD:
            return ToolBarItemWord(uiPlugin, toolBarItemName);
        default :
            console.error( `해당 타입의 툴바는 구현되어 있지 않습니다. : pluginName : ${uiPlugin.pluginName}, toolbarItemName ${toolBarItemName}` );
    }
}