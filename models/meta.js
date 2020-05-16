const Model  = require('./model');

class Meta extends Model{
    constructor({id, id_objetivo, nombre, descripcion, dias_duracion, numero}){
        super();
        this.id = id;
        this.id_objetivo = id_objetivo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.dias_duracion = dias_duracion;
        this.numero = numero;
    }   
}

module.exports = Meta;