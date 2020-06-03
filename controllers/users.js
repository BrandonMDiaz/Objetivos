const {UsuarioModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')
const bcrypt = require('bcrypt');


class UsuarioController{
    constructor(){

    }

    async getAll(req,res){
        let data = await UsuarioModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.id;
        let data = await UsuarioModel.find(id);
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
        
        req.body.password = bcrypt.hashSync(req.body.password,10);
        console.log(req.body);
        let usuario = new UsuarioModel(req.body);
        let data = await usuario.save();
        res.send(data);
    }

    put(req,res){

    }

    delete(req,res){

    }
}

module.exports = new UsuarioController();