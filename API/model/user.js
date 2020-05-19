var sql = require('./db.js');

var User = function(user){
    this.id = user.id;
    this.Address = user.Address;
    this.City = user.City;
    this.Email = user.Email;
    this.Name = user.Name;
    this.Regio = user.Regio;
    this.Zip = user.Zip;
    
};

User.createUser = function(newuser, result) {
    sql.query("INSERT INTO Users set ?", newuser, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
    
};

module.exports= User;
