const {ObjetivoUsuarioModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class ObjetivoUsuarioController{
    constructor(){

    }

    async getAll(req,res){
        let data = await ObjetivoUsuarioModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.objUsrId;
        let data = await ObjetivoUsuarioModel.find({id});
        res.send(data);        
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_publicacion: 'number|required'
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let objUsr = new ObjetivoUsuarioModel(req.body);
        let data = await objUsr.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.objUsrId;
        if(
            !Validator.validate(req.body, {
                id: 'number|required',
                id_objetivo: 'number|required',
                id_categoria: 'number|required'
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }
        let objUsr = new ObjetivoUsuarioModel(req.body);

        let data = await objUsr.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.objUsrId;
        let response = await ObjetivoUsuarioModel.delete(id);
        return res.send(response);
    }
}

module.exports = new ObjetivoUsuarioController();