const Model  = require('./model');

class Categorias extends Model{
    
    constructor({id,nombre,descripcion}){
        super();
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
    
}