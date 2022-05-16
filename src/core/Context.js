
export default class Context {

    constructor( config ) {
        this.config = config;
        this.root = this.config.root;

    }


    async initPlugins(){
        this.pluginManager = new this.config.pluginManager(this);
        this.pluginManager.initPlugins();
    }

    static async create( config ) {
        const context = new this( config )

        await context.initPlugins();
        return context;
    }
}