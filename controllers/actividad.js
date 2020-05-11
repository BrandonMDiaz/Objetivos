const {ActividadModel} = require('../models/index');
const Validator = require('./validator');
const Response = require('.responsesController')

class ActividadController{
    constructor(){

    }

    getAll(req,res){
        let data = ActividadModel.getAll();
        console.log(data)
        res.send(data);
        // res.json = 
    }   

    get(req,res){

    }

    post(req,res){

    }

    put(req,res){

    }

    delete(req,res){

    }
}