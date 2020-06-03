const {ComentarioPublicacionModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class ComentarioPublicacionController{
    constructor(){

    }

    async getAll(req,res){
        let data = await ComentarioPublicacionModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.comentarioPublicacionId;
        let data = await ComentarioPublicacionModel.find({id});
        res.send(data);        
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_objetivo: 'number|required',
                id_categoria: 'number|required'
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let comPub = new ComentarioPublicacionModel(req.body);
        let data = await comPub.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.comentarioPublicacionId;
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
        let comPub = new ComentarioPublicacionModel(req.body);

        let data = await comPub.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.comentarioPublicacionId;
        let response = await ComentarioPublicacionModel.delete(id);
        return res.send(response);
    }
}

module.exports = new ComentarioPublicacionController();