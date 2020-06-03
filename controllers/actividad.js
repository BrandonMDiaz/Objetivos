const {ActividadModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class ActividadController{
    constructor(){

    }

    async getAll(req,res){
        let data = await ActividadModel.getAll();
        console.log(data)
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.actividadId;
        let data = await ActividadModel.find({id});
        res.send(data);        
    }

    async post(req,res){
        
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_meta: 'number|required',
                nombre: 'string|required',
                descripcion: 'string|required',
                horas_duracion: 'string|required',
                repetir_cada_semana: 'number|required',
                dias_repetir: 'string|required', 
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let actividad = new ActividadModel(req.body);
        let data = await actividad.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.actividadId;
        if(
            !Validator.validate(req.body, {
                id: 'number|required',
                id_usuario: 'number|required',
                id_meta: 'number|required',
                nombre: 'string|required',
                descripcion: 'string|required',
                horas_duracion: 'date|required',
                repetir_cada_semana: 'number|required',
                dias_repetir: 'string|required', 
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }
        let actividad = new ActividadModel(req.body);

        let data = await actividad.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.actividadId;
        let response = await ActividadModel.delete(id);
        return res.send(response);
    }
}

module.exports = new ActividadController();