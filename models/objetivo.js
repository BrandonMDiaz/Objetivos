const Model  = require('./model');
const db = require('../db/index')

class Objetivo extends Model{
    constructor({id, id_usuario, nombre, descripcion, dias_duracion, publico}){
        super();    
        this.id = id;
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.dias_duracion = dias_duracion;
        this.publico = publico
    }

    // static async getObjetivosActualizados(){
    //     try{
    //         const tableName = this.name;
    //         const query = `SELECT * FROM ${tableName} WHERE id_objetivo = 0`;
    //         let result = await db.rawQuery(query);
    //         return result; 
    //     }
    //     catch(err){
    //         throw err;
    //     }
       
    // }


    /**
     * Funcion que revisa si ya hay gente siguiendo el objetivo actual
     */
    static async  checkUpdate(id){
        const query = `SELECT id FROM objetivo_usuario WHERE id_objetivo = ${id} LIMIT 1`;
        let result = await db.rawQuery(query);
        console.log(result)
        //if you can update return true, if you CANT upadate return false
        if(result.length === 0 || (result.constructor === Object && Object.keys(result).length === 0 )){
            return true;
        }
        return false; 
    }
}

module.exports = Objetivo;