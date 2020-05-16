const jwt = require('jsonwebtoken');


class Auth{

    static VerificaToken(req, res, next){
        let token = req.get('token');//get headers

        jwt.verify(token, process.env.SEED, (err, decoded) => {
            if(err) {
                return res.status(401).json({
                    ok:false,
                    err
                })
            }
            req.usuario = decoded.user;
            next();
        });
    }


    // static autenticar(req, res, next){
    //     let token = req.get('token');
    //     jwt.verify(token, process.env.SEED, (err, decoded) => {
    //         if(err) {
    //             return res.status(401).json({
    //                 ok:false,
    //                 err
    //             })
    //         }

    //         req.user = decoded.user;
    //         next();
    //     });
    // }



    static VerificaAdminRol(req,res,next){
        let user = req.user;
        if(user.rol == 'ADMIN_ROLE'){
            next();
        }
        else{
            return res.json({
                ok: false,
                err:{
                    message: 'No tienes permisos'
                }
            })
        }

    }
}
module.exports = Auth;