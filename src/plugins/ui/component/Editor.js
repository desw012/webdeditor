import { COMPONENT_IDS } from '../constants'
import { defaultContent } from "../../../config";


export default function Editor( uiPlugin ) {
    const iframe = document.createElement('iframe');
    iframe.id = COMPONENT_IDS.ID_EDITOR_IFRAME;
    iframe.title = 'editor';

    iframe.addEventListener('load', ()=>{
        uiPlugin.document = iframe.contentWindow.document;

        uiPlugin.document.open();
        uiPlugin.document.write(defaultContent);
        uiPlugin.document.close();

        uiPlugin.document.body.contentEditable = 'true';
    });

    return iframe;
}