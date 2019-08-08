const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'123AAa123',
    database:'mytestdb'
})

function getAllPersons(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err);
                }else{
                    resolve(rows);
                }
                //connection.close()
                //here i have not closed the conn as long as the server run it will remain open asitis
                //due to that user after refreshing page will be able to see data..
                //if a script id running then i want to close conn
                //if web server is permanently running then i don't want to close the conn
                //conn will be in our memory..
            }

        )
    })
}

function addNewPerson(name,age,city){
    return new Promise(function(resolve,reject){
        connection.query(`
        INSERT INTO persons(name,age,city) VALUES(?,?,?)`,
        [name,age,city],function(err,results){
            if(err){
                reject(err);
            }else{
                resolve();
            }
        }
        )
    })
}

exports=module.exports={
    getAllPersons,addNewPerson
}