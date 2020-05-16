const {LikeModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class LikeController{
    constructor(){
    }

    async getAll(req,res){
        let data = await LikeModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.categoriaId;
        let data = await LikeModel.find({id});
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_objetivo: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let like = new LikeModel(req.body);
        let data = await like.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.likeId;
        if(
            !Validator.validate(req.body, {
                id: 'number|required',
                id_usuario: 'number|required',
                id_objetivo: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let like = new LikeModel(req.body);
        let data = await like.update();
        res.send(data);

    }

    async delete(req,res){
        let id = req.params.likeId;
        let response = await LikeModel.delete(id);
        return res.send(response);
    }
}

module.exports = new LikeController();