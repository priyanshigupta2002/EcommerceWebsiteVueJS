const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'sqluser',
    password:'Bbcbbc@912010',
    database:'priyanshidb'
});

con.connect(function(err){
    if(err){
        console.log('Error',err.message);
    }
    else{
        console.log('Connected Successfully');
    }
});

module.exports=con;