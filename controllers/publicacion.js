const {PublicacionModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class PublicacionController{
    constructor(){
        this.getAll = this.getAll.bind(this);
    }

    async getAll(req,res){

        let data = await PublicacionModel.getAll();
        // let data = await ObjetivoModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.objetivoId;
        let data = await PublicacionModel.find({id});
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_objetivo_meta: 'number',
                texto: 'string|required',
                tipo: 'descripcion',
                fecha_creacion: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let publicacion = new PublicacionModel(req.body);

        let data = await publicacion.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.publicacionId;
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_objetivo_meta: 'number',
                texto: 'string|required',
                tipo: 'descripcion',
                fecha_creacion: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }


        let publicacion = new PublicacionModel();

        let data = await publicacion.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.publicacionId;
        let response = await PublicacionModel.delete(id);
        return res.send(response);
    }
}

module.exports = new PublicacionController();