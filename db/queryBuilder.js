class QueryBuilder{
    constructor(){

    }

    static where(obj){
        let dataToFind = [];
        let query = `WHERE `;
        let index = 0;
        for(const property in obj){
            if(index > 0){
                // query += `AND ${property} = ${obj[property]} `
                query += `AND ${property} = ? `
                dataToFind[index] = obj[property];
            }
            else{
                // query += `${property} = ${obj[property]} `
                query += `${property} = ? `
                dataToFind[index] = obj[property];
            }
            index++; 
        }
        return {
            query,
            dataArray: dataToFind,
        }
    }
}

module.exports = QueryBuilder;