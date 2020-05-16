const Model = require('./model');

class Amigo extends Model{
    
    constructor({id, id_usuario1, id_usuario2}){
        super();
        this.id = id;
        this.id_usuario1 = id_usuario1;
        this.id_usuario2 = id_usuario2;
    }
    
}