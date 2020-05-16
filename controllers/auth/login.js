const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuario = require('../models/usuarios')

class Login{
    constructor(){
        this.log = this.log.bind(this);
    }

    async log(req,res){
        let body = req.body;
        let userDB = await usuario.find({email: body.email})
        
        if(!userDB || userDB === [] || userDB === {}){
            return res.json({
                ok:false,
                message: 'Email o contraseña invalidos'
            })
        }
        if(!bcrypt.compareSync(body.password, userDB.password)){
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario o contraseña incorrectos"
                }
            })
        }
        let token = jwt.sign({
            user:userDB
        }, process.env.SEED,{expiresIn: process.env.CADUCIDAD_TOKEN}) //60 seg * 60 minutos * 24 horas * 30 dias 
        res.json({
            user:userDB,
            token
        });
    }
}

module.exports = new Login();