const {ObjetivoModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class ObjetivoController{
    constructor(){
        this.getAll = this.getAll.bind(this);
    }

    async getAll(req,res){
        let data = await ObjetivoModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.objetivoId;
        let data = await ObjetivoModel.find(id);
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_objetivo: 'number',
                nombre: 'string|required',
                descripcion: 'descripcion',
                dias_duracion: 'number|required',
                publico: 'number|required', 
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let objetivo = new ObjetivoModel();
        objetivo.id_usuario = req.body.id_usuario;
        objetivo.id_objetivo = req.body.id_objetivo;
        objetivo.nombre = req.body.nombre;
        objetivo.descripcion = req.body.descripcion;
        objetivo.dias_duracion = req.body.dias_duracion;
        objetivo.publico = req.body.publico;

        let data = await objetivo.save();
        res.send(data);
    }

    put(req,res){

        // if(
        //     !Validator.validate(req.body, {
        //         id_usuario: 'number|required',
        //         id_objetivo: 'number',
        //         nombre: 'string|required',
        //         descripcion: 'descripcion',
        //         dias_duracion: 'number|required',
        //         publico: 'number|required', 
        //     })
        // ){
        //     return res.send({
        //         message: 'bad request'
        //     });
        // }

        // let objetivo = new ObjetivoModel();
        // objetivo.id_usuario = req.body.id_usuario;
        // objetivo.id_objetivo = req.body.id_objetivo;
        // objetivo.nombre = req.body.nombre;
        // objetivo.descripcion = req.body.descripcion;
        // objetivo.dias_duracion = req.body.dias_duracion;
        // objetivo.publico = req.body.publico;

        // let data = await objetivo.save();
        // res.send(data);
    }

    delete(req,res){

    }
}

module.exports = new ObjetivoController();