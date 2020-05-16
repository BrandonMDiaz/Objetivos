const {MetaModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class MetaController{
    constructor(){

    }

    async getAll(req,res){
        let data = await MetaModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.metaId;
        let data = await MetaModel.find({id});
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_objetivo: 'number|required',
                nombre: 'string|required',
                descripcion: 'string|required',
                dias_duracion: 'number|required',
                numero: 'number|required', 
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let meta = new MetaModel(req.body);
        let data = await meta.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.metaId;
        if(
            !Validator.validate(req.body, {
                id_objetivo: 'number|required',
                nombre: 'string|required',
                descripcion: 'string|required',
                dias_duracion: 'number|required',
                numero: 'number|required', 
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let meta = new MetaModel(req.body);
        let data = await meta.update();
        res.send(data);
    }

    async delete(req,res){
        let id = req.params.metaId;
        let response = await MetaModel.delete(id);
        return res.send(response);
    }
}

module.exports = new MetaController();