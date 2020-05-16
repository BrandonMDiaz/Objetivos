const Model  = require('./model');

class LikeModel extends Model{
    constructor({id,id_usuario,id_objetivo}){
        super();
        this.id = id;
        this.id_usuario = this.id_usuario;
        this.id_objetivo = this.id_objetivo;
    }
}

module.exports = LikeModel