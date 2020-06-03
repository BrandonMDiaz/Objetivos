const Model  = require('./model');

class Categoria_objetivo extends Model{
    
    constructor({id, id_objetivo, id_categoria}){
        super();
        this.id = id;
        this.id_objetivo = id_objetivo;
        this.id_categoria = id_categoria;
    }   
}

module.exports = Categoria_objetivo
