const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UsuarioModel} = require('../../models/index')

class Login{
    constructor(){
    }

    async log(req,res){
        let userDB = await UsuarioModel.find({email: req.body.email})
        if(!userDB || userDB === [] || userDB === {}){
            return res.json({
                ok:false,
                message: 'Email o contraseña invalidos'
            })
        }
        if(userDB && userDB !== undefined && userDB[0].password !== undefined){
            if(!bcrypt.compareSync(req.body.password, userDB[0].password)){
                return res.status(401).json({
                    ok: false,
                    err: {
                        message: "Email o contraseña invalidos"
                    }
                })
            }
            let token = jwt.sign({
                user:userDB
            }, process.env.SEED,{expiresIn: process.env.CADUCIDAD_TOKEN}) //60 seg * 60 minutos * 24 horas * 30 dias 
            return res.json({
                user:userDB,
                token
            });
        }
        return res.send({
            message:'error :v'
        })
        
    }
}

module.exports = new Login();