const ErrorController = require('../controllers/errors');
let mysql = require('mysql');

class DB{
    constructor(){
        this.con = mysql.createConnection({
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASS,
            database: "objetivos2",
            timezone: 'utc',
          });
        
        this.con.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            console.log('Conectado con exito a DB')
        });
    }
    async getAll(table){
        const query = `SELECT * FROM ${table}` ;
        let resultado = new Promise((resolve, reject) => {
            this.con.query(query, (err,res,fields) => {
            if(err){
                return reject(err)
            }
            return resolve(res);
            })
        })
        
        return resultado;
    }
    async get(id,table){
        const query = `SELECT * FROM ${table} WHERE id = ?` ;
        let resultado = new Promise((resolve, reject) => {
            this.con.query(query, [id], (err,res,fields) => {
            if(err){
                return reject(err)
            }
            return resolve(res);
            })
        })
        
        return resultado;
    }
    async getWith(id,table, join, param){
        const query = { 
            sql: `SELECT * FROM ${table} 
            JOIN ${join} ON ${table}.id = ${join}.${param}Id
            WHERE ${table}.id = ?
            `,
            nestTables: true
        }
        const promise = new Promise((resolve,reject) => {
            this.con.query(query, [id], (err,res) => {
                if(err){
                    console.error(err)
                    return reject(err);
                }
                return resolve(res);
            });
        })
        
        return promise;
    }
    async getForeignKey(id,table,foreignKeyName){
        const query = { 
            sql: `SELECT * FROM ${table} 
            WHERE ${table}.${foreignKeyName} = ?`,
        }
        const promise = new Promise((resolve,reject) => {
            this.con.query(query, [id], (err,res) => {
                if(err){
                    console.error(err)
                    return reject(err);
                }
                return resolve(res);
            });
        })
        
        return promise;
    }
    async save(obj,table){
        const query = `INSERT INTO ${table} SET ?`;
        const promise = new Promise((resolve,reject) => {
            this.con.query(query, [obj], (err,res,fields) => {
                if(err){
                    console.error('Hubo error');
                    console.error(err);
                    return reject(err);
                }
                obj.id = res.insertId;
                return resolve(obj);
            });
        })
        return promise;
    }

    /**
     * returns updated item
     * 
     * @param {Object}  obj 
     * @param {string} table 
     * @return Promise   
     */
    async update(obj, table){
        const query = `UPDATE ${table} SET ?? WHERE id = ?`;
        const promise = new Promise((resolve,reject) => {
            this.con.query(query, [obj, obj.id], (err,res,fields) => {
                if(err){
                    console.error('Hubo error al hacer update');
                    console.error(err);
                    return reject(err);
                }
                console.log(res)
                console.log(fields)
                return resolve(res);
            });
        })
        return promise;
    }

    /**
     * 
     * @param {number} id id of the data to be deleted 
     * @param {string} table name of the table you are willing to use
     * @return {Promise} regresa una promesa
     */
    async delete(id, table){
    const query = `DELETE FROM ${table} WHERE id = ?`
    const promise = new Promise((resolve,reject) => {
        this.con.query(query,[id], (err,res) => {
            if (err){
                return reject(err)
            }
            return resolve(res.affectedRows)
        });
    });
    return promise;  
    }

    // async createTable(data){
    //     const query = {
    //         sql: 
    //             "CREATE TABLE ? (id INTEGER NOT NULL PRIMARY KEY, nombre varchar(255));"


    //     }
    // }
}

module.exports = new DB()
