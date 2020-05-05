const DB = require('../db/index')
const ErrorController = require('../controllers/errors');

class Objetivo{
    constructor(){
        this.tableName = 'objetivos';
    }
    
    static tableName(){
        return 'objetivos';
    }

    static async getAll(limit = 7 , skip = 0, order = 'desc', orderBy = 'nombre'){
        try {
            const query = {
                sql: 'SELECT * FROM Objetivos WHERE id = ? ORDER BY ? ? LIMIT ? OFFSET ?;'
            }
            let result = await DB.getAll(Objetivo.tableName());
            throw result;
        }
        catch(err){
           return err;
        }
    }
 
    static async find(id){
        try{
        const data = await DB.get(id, Objetivo.tableName());
        return data
        }
        catch(err){
            throw err;
        }
    }
    async save(obj){
        try{ 
            let resp = await DB.save(obj, Objetivo.tableName());
            return resp;
        }
        catch(err){
            throw err;
        }
    }
    //id del objetivo
    static async metas(id){
        // const sqlJoin = `
        // SELECT * FROM ${Objetivo.tableName()} 
        // JOIN metas ON ${Objetivo.tableName()}.id = metas.objetivoId`
        try{ 
            let resp = await DB.getForeignKey(id,'metas','objetivoId');
            // let resp = await DB.getWith(id, Objetivo.tableName(), 'metas', 'objetivo');
            return resp;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
}

module.exports = Objetivo;