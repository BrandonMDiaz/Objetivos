const Model  = require('./model');

class Objetivo_usuario extends Model{
    
    constructor({id, id_usuario, id_objetivo, fecha_inicio}){
        super();
        this.id = id;
        this.id_usuario = id_usuario;
        this.id_objetivo = id_objetivo;
        this.fecha_inicio = fecha_inicio
    }   
}

module.exports = Objetivo_usuario
