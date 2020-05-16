const {AgendaModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('./responsesController')

class AgendaController{
    constructor(){
        this.getAll = this.getAll.bind(this);
    }

    async getAll(req,res){

        let data = await AgendaModel.getAll();
        res.send(data);
    }   

    async get(req,res){
        if(req.query){
            console.log(req.query)
        }
        let id = req.params.agendaId;
        let data = await AgendaModel.find({id});
        res.send(data);
    }

    async post(req,res){
        if(
            !Validator.validate(req.body, {
                id_usuario: 'number|required',
                id_actividad: 'number|required',
                hora_inicio: 'string|required', //Time, te falta ponerle que valide el tiempo
                completado: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let agenda = new AgendaModel(req.body);

        let data = await agenda.save();
        res.send(data);
    }

    async put(req,res){
        req.body.id = req.params.agendaId;
        if(
            !Validator.validate(req.body, {
                id: 'number|required',
                id_usuario: 'number|required',
                id_actividad: 'number|required',
                hora_inicio: 'string|required', //Time, te falta ponerle que valide el tiempo
                completado: 'number|required',
            })
        ){
            return res.send({
                message: 'bad request'
            });
        }

        let agenda = new AgendaModel();  

        let data = await agenda.update();
        return res.send(data);
    }

    async delete(req,res){
        let id = req.params.agendaId;
        let response = await AgendaModel.delete(id);
        return res.send(response);
    }
}

module.exports = new AgendaController();