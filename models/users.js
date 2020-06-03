const Model  = require('./model');

class Usuario extends Model{
    constructor({id,name,last_name,email,username,password}){
        super()
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}

module.exports = Usuario;