const database = require('../db/index')

class Model{
    constructor(){
        this.tableName = this.constructor.name;
    }
    
    static async tableName(){
        return this.tableName = this.constructor.name;
    }

    static async getAll(){
        
        try{
            console.log(this.tableName())
            const data = await db.getAll(this.tableName);
            return data;
        }
        catch(err){
            throw err;
        }
    }   

    static async find(id){
        try{
            const data = await db.get(id, this.tableName);
            return data;
        }
        catch(err){
            throw err;
        }
    }
    

    async save(){
        let dataToBeSaved = this.#getModelData();
        try{
            const dataSaved = await db.save(dataToBeSaved, this.tableName);
            return dataSaved;
        }
        catch(err){
            throw err;
        }
    }
    async update(){
        let dataToBeUpdated = this.#getModelData();
        try {
            const dataUpdated = await db.update(dataToBeUpdated, this.tableName);
            return dataUpdated;
        }
        catch(err){
            throw err;
        }
    }
    static async delete(id){
        try{
            const itemDeleted = await db.delete(id,this.tableName);
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
    #getModelData(){
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