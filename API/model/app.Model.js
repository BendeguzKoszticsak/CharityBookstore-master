var sql = require('./db.js');


var Book = function(task){
    this.Name = task.Name;
    this.Author = task.Author;
    this.Price = task.Price
    this.Available = task.Available;
    this.Description = task.Description;
    this.Picture = task.Picture
};
Book.createBook = function (newTask, result) {    
        sql.query("INSERT INTO Books set ?", newTask, function (err, res) {
                
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
Book.getTaskById = function (taskId, result) {
        sql.query("Select * from Books where Id = ?  ", taskId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Book.getAllTask = function (result) {
        sql.query("Select * from Books", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};
Book.updateById = function(Bookid, task, result){
  console.log(Bookid);
  sql.query("UPDATE Books SET Author = ? WHERE id = ?", [task.Author, Bookid], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Book.remove = function(id, result){
     sql.query("DELETE FROM Books WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Book;
