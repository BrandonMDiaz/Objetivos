const {CategoriaObjetivoModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class CategoriaObjetivoController{
    constructor(){

    }

    async getAll(req,res){
        let data = await CategoriaObjetivoModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.categoriaObjetivoId;
        let data = await CategoriaObjetivoModel.find({id});
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

        let catObj = new CategoriaObjetivoModel(req.body);
        let data = await catObj.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.categoriaObjetivoId;
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
        let  = new CategoriaObjetivoModel(req.body);

        let data = await catObj.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.categoriaObjetivoId;
        let response = await CategoriaObjetivoModel.delete(id);
        return res.send(response);
    }
}

module.exports = new CategoriaObjetivoController();