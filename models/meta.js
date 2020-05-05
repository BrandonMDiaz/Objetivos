const db = require('../db/index')
class MetaModel{
    constructor(){
        this.tableName = 'metas';
        this.save = this.save.bind(this);
    }   
    static tableName(){
        return 'metas'
    }
    static async getAll(){
        
        try{
            console.log(MetaModel.tableName())
            const data = await db.getAll(MetaModel.tableName());
            return data;
        }
        catch(err){
            throw err;
        }
    }   

    static async find(id){
        try{
            const data = await db.get(id, MetaModel.tableName());
            return data;
        }
        catch(err){
            throw err;
        }
    }
    
    static async save(obj){
        try{
            const data = await db.save(obj, MetaModel.tableName());
            return data;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = MetaModel;