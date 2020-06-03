const Model  = require('./model');

class Comentario_publicacion extends Model{
    
    constructor({id, id_usuario, id_publicacion}){
        super();
        this.id = id;
        this.id_usuario = id_usuario;
        this.id_publicacion = id_publicacion;
    }   
}

module.exports = Comentario_publicacion
