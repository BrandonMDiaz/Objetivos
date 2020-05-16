const Model  = require('./model');

class Actividad extends Model{
    
    constructor({id, id_meta, nombre, descripcion,
                horas_duracion, repetir_cada_semana, dias_repetir}){
        super();
        this.id = id;
        this.id_meta = id_meta;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.horas_duracion = horas_duracion;
        this.repetir_cada_semana = repetir_cada_semana;
        this.dias_repetir = dias_repetir;
    }   
}

module.exports = Actividad
