const {LikePublicacionModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class LikePublicacionController{
    constructor(){

    }

    async getAll(req,res){
        let data = await LikePublicacionModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.likePubId;
        let data = await LikePublicacionModel.find({id});
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

        let likePub = new LikePublicacionModel(req.body);
        let data = await likePub.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.likePubId;
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
        let likePub = new LikePublicacionModel(req.body);

        let data = await likePub.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.likePubId;
        let response = await LikePublicacionModel.delete(id);
        return res.send(response);
    }
}

module.exports = new LikePublicacionController();