const database = require('../db/index')

class User{
    constructor(){

    }

    async getAll(){
        return await database.getAll('users');
    }

    async get(data){
        
        return await database.get('users');
    }

    async save(data){

    }

    async update(){

    }

    async delete(){

    }
}

module.exports = User;