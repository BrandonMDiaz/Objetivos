


/*** Arregla para que se puedan poner minimos en strings, ya que si pones una astring
vacia se guarda de todos modos, tambien para que passwords sea mayor a 6 */


class Validator{

    constructor(){
        this.dateRegexp = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        this.emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    /*
    number : INT
    string : String
    bool : true, false
    date : Date
    required: tiene que existir
    email: correo electronico


    bodySpects = {
        nombre: 'string|required',
        fecha: 'date|required',
    }
    */ 
    validate(body, bodySpecs){
        //iteramos sobre las validaciones
        for(let key in bodySpecs){
            //separamos las validaciones de un elemento en un arreglo
            let arraySpects = bodySpecs[key].split('|');
            //checamos si tiene required como parametro
            if(arraySpects.includes('required')){
                //si lo tiene checamos que exista el elemento en el body
                if(typeof(body[key]) === 'undefined'){
                    return false;
                }
                // if(typeof(body[key]) === 'string'){
                //     if(body[key].length < 4){
                //         console.log(`Required was specified in ${body[key]}`);
                //         return false

                //     }
                // }
            }
            //iteramos sobre las condiciones
            arraySpects.forEach(val => {
                switch(val){
                    case 'number': 
                        if(!Number.isInteger(body[key])){
                            return false;
                        }
                        break;
                    case 'string':
                        if(typeof(body[key]) !== 'string'){

                            return false;
                        }
                        break;
                    case 'bool':
                        if(body[key] !== 1 || body[key] !== 0 || body[key] !== false || body[key] !== true ){

                            return false
                        }
                        break;
                    case 'date':
                        if(!this.dateRegexp.test(body[key])){

                            return false;
                        }
                        break;
                    case 'email':
                        if(!this.emailRegexp.test(body[key])){
                            return false;
                        }
                        break;
                    case 'required':
                        break;
                    default: 
                        return false;
                } 
            });
        }   
        return true;
    }
}
module.exports = new Validator();