import Plugin from "../../core/Plugin";

import RootContainer from './component/RootContainer';
import Editor from "./component/Editor";
import ToolBar from "./component/ToolBar";

import './index.css'

export default class UI extends Plugin {
    get pluginName() {
        return 'UI';
    }

    init(){
        const root = RootContainer( this );
        this.context.root.appendChild(root);

        const editor = Editor( this );
        root.appendChild(editor);

        const toolbar = ToolBar( this );
        root.appendChild(toolbar);


        this.root = root;
        this.editor = editor;
        this.toolbar = toolbar;
    }
}