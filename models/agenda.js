const Model  = require('./model');

class Agenda extends Model{
    
    constructor({id,id_actividad,hora_inicio,completado}){
        super();
        this.id = id;
        this.id_actividad = id_actividad;
        this.hora_inicio = hora_inicio;
        this.completado = completado;
    }
    
}

module.exports = Agenda;