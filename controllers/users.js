const {UsuarioModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')


class UsuarioController{
    constructor(){

    }

    async getAll(req,res){
        let data = await ObjetivoModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.id;
        let data = await ObjetivoModel.find(id);
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                name: 'string|required',
                last_name: 'string|required',
                email: 'email|required',
                username: 'string|required',
                password: 'string|required',
            })
        ){
            res.send({
                message: 'bad request'
            });
        }
        
        let usuario = new UsuarioModel();
        usuario.name = req.body.name;
        usuario.last_name = req.body.last_name;
        usuario.email = req.body.email;
        usuario.username = req.body.username;
        usuario.password = req.body.password;

        let data = await usuario.save();
        res.send(data);
    }

    put(req,res){

    }

    delete(req,res){

    }
}

module.exports = new UsuarioController();