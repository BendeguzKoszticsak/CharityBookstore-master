var sql = require('./db.js');

var Order = function(order){
    this.Bookid = order.Bookid;
    this.Amount = order.Amount;
    this.Price = order.Price;
    this.UserId = order.UserId
    
};
Order.createOrder = function(newOrder, result) {
    sql.query("INSERT INTO Orders set ?", newOrder, function(err, res){
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
Order.getOrderById = function (taskId, result) {
    sql.query("Select * from Orders where UserId = ? ", taskId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res);
          
            }
        });   
};

module.exports= Order;
