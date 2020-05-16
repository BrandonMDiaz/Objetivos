class QueryBuilder{
    constructor(){

    }

    static where(obj){
        let query = `WHERE `;
        let index = 0;
        for(const property in obj){
            if(index > 0){
                query += `AND ${property} = ${obj[property]} `
            }
            else{
                query += `${property} = ${obj[property]} `
            }
            index++; 
        }
        return query;
    }
}

module.exports = QueryBuilder;