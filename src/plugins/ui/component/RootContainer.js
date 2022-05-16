import {COMPONENT_IDS} from "../constants";

export default function RootContainer( uiPlugin ) {
    const root = document.createElement('div');
    root.id = COMPONENT_IDS.ID_EDITOR_CONTAINER;

    return root;
}