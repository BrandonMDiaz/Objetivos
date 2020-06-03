const {AmigoModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class AmigoController{
    constructor(){
    }

    async getAll(req,res){

        let data = await AmigoModel.getAll();
        // let data = await ObjetivoModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.amigoId;
        let data = await AmigoModel.find({id});
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_usuario1: 'number|required',
                id_usuario2: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }
        
        let amigo = new AmigoModel(req.body);
        let data = await amigo.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.amigoId;
        if(
            !Validator.validate(req.body, {
                id: 'number|required',
                id_usuario1: 'number|required',
                id_usuario2: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let amigo = new AmigoModel(req.body);
        let data = await amigo.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.amigoId;
        let response = await AmigoModel.delete(id);
        return res.send(response);
    }
}

module.exports = new AmigoController();