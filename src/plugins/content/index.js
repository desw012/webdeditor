import { _webapp } from "../../config";
import Plugin from "../../core/Plugin";

const replaceHost = (strContent) => {
    strContent = strContent.replace(new RegExp("http://"+location.host+":80"+_webapp+"/DownController", "g"), _webapp+"/DownController");
    strContent = strContent.replace(new RegExp("https://"+location.host+":80"+_webapp+"/DownController", "g"), _webapp+"/DownController");
    strContent = strContent.replace(new RegExp("http://"+location.host+_webapp+"/DownController", "g"), _webapp+"/DownController");
    strContent = strContent.replace(new RegExp("https://"+location.host+_webapp+"/DownController", "g"), _webapp+"/DownController");

    return strContent;
}

export default class Content extends Plugin {
    get pluginName() {
        return 'CONTENT';
    }

    init(){
        this.context.getContent = this.getContent.bind(this);
        this.context.setContent = this.setContent.bind(this);
    }

    getContent(){
        const uiPlugin = this.context.pluginManager.get('UI');
        return replaceHost(uiPlugin.document.body.innerHTML);
    }

    setContent( strContent ){
        const uiPlugin = this.context.pluginManager.get('UI');
        uiPlugin.document.body.innerHTML = strContent;
    }
}