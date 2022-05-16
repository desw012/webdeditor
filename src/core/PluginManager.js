export default class PluginManager {

    constructor( context ) {
        this.context = context;
        this.plugin = new Map();
    }

    initPlugins(){
        const plugins = this.context.config.plugins;
        const loadPluginMap = new Map();
        const requiredPluginMap = new Map();

        plugins.forEach(( plugin )=>{
            const inst = new plugin(this.context);
            loadPluginMap.set(inst.pluginName, inst);
        });

        const pluginInit = ( plugin ) => {
            plugin.init();
            this.plugin.set(plugin.pluginName, plugin );

            if(requiredPluginMap.get(plugin.pluginName)){
                requiredPluginMap.get(plugin.pluginName).forEach((plugin)=>{
                    const required = plugin.required.filter((pluginName) => {
                        return this.plugin.get(pluginName) == null;
                    });

                    if(required.length === 0){
                        pluginInit(plugin);
                    }
                })
                requiredPluginMap.delete()
            }
        }


        loadPluginMap.forEach(( plugin )=>{
            if(!plugin.required || plugin.required.length === 0){
                pluginInit(plugin);
            }
            const require = plugins.required.filter((pluginName) => {
                return this.plugin.get(pluginName) == null;
            });

            if( require.length === 0){
                pluginInit(plugins)
            } else {
                require.forEach((pluginName)=>{
                    requiredPluginMap.set(pluginName, plugins);
                })
            }
        });
    }

    get( pluginName ){
        return this.plugin.get(pluginName);
    }
}