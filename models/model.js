const db = require('../db/index')

class Model{
    constructor(){
    }
    
    // tableName(){
    //     return this.name;
    // }

    static async getAll(){
        let tableName = this.name;
        try{
            const data = await db.getAll(tableName);
            return data;
        }
        catch(err){
            throw err;
        }
    }   

    static async find(obj){
        let tableName = this.name;
        try{
            const data = await db.get(obj, tableName);
            return data;
        }
        catch(err){
            throw err;
        }
    }
    
    async save(){
        let dataToBeSaved = this.getModelData();
        let tableName = this.constructor.name;
        try{
            const dataSaved = await db.save(dataToBeSaved, tableName);
            return dataSaved;
        }
        catch(err){
            throw err;
        }
    }
    async update(){
        let dataToBeUpdated = this.getModelData();
        let tableName = this.constructor.name;
        try {
            const dataUpdated = await db.update(dataToBeUpdated, tableName);
            return dataUpdated;
        }
        catch(err){
            throw err;
        }
    }
    static async delete(id){
        try{
            const itemDeleted = await db.delete(id,this.tableName);
            console.log(itemDeleted);
            return true;
        }
        catch(err){
            throw err;
        }
    }
    /**
     * Private function that returns model properties to be saved
     * 
     * @return object
     */
    getModelData(){
        let data = this;
        delete data.tableName;
        return data;
    }

    // async save(obj){
    //     try{
    //         const data = await db.save(obj, this.tableName);
    //         return data;
    //     }
    //     catch(err){
    //         throw err;
    //     }
    // }
    
    // {
    //     tableName: '',
    //     nombreCampo: 'tipo de dato',
    //     nombreCampo: 'tipo de dato',
    //     nombreCampo: 'tipo de dato',
    //     nombreCampo: 'tipo de dato',
    //     foreignKey: 'nombreDelCampo',

    // }
}

module.exports = Model