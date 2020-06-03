const {ObjetivoModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class ObjetivoController{
    constructor(){
        this.getAll = this.getAll.bind(this);
    }

    async getAll(req,res){

        let data = await ObjetivoModel.getAll();
        // let data = await ObjetivoModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.objetivoId;
        let data = await ObjetivoModel.find({ id });
        res.send(data);
    }

    async post(req,res){
        let usuario = req.usuario[0];
        console.log(req.body);

        //agregar id del usuario
        req.body.id_usuario = usuario.id;
        req.body.publico = 0;
        console.log(req.body);

        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                nombre: 'string|required',
                descripcion: 'string',
                dias_duracion: 'number|required',
                publico: 'number|required', 
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let objetivo = new ObjetivoModel(req.body);

        let data = await objetivo.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.objetivoId;
        if(req.body.publico === 1){
            
        }
        if(
            !Validator.validate(req.body, {
                id: 'number|required',
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

        let objetivo = new ObjetivoModel(req.body);


        // if(!ObjetivoModel.checkUpdate(req.body.id)){
                
        //     //el nuevo objetivo hacemos que su id_objetivo apunte a 0
        //     objetivo.id_objetivo = 0;
        //     //eliminamos el id del objetivo que se nos dio
        //     delete objetivo.id
        //     //guardamos el nuevo objetivo
        //     let data = await objetivo.save();
        //     //editamos el objetivo anterior para que apunte al nuevo
        //     objetivo.id = req.params.objetivoId;
        //     objetivo.id_objetivo = data.id;
        //     await objetivo.update();
        //     return res.send(data);
        // }        

        let data = await objetivo.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.objetivoId;
        let response = await ObjetivoModel.delete(id);
        return res.send(response);
    }
}

module.exports = new ObjetivoController();