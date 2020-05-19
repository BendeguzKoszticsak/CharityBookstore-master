var Book = require('../model/app.Model');
var Order = require('../model/order');
var User = require('../model/user');

exports.adduser = function(req, res) {
  var new_task = new User(req.body);
  
  User.createUser(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.addOrder = function(req, res) {
  var new_task = new Order(req.body);
  
  Order.createOrder(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.getOrder = function(req, res) {
  Order.getOrderById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}



exports.allBooks = function(req, res) {
  Book.getAllTask(function(err, task) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
  });
};



exports.addBook = function(req, res) {
  var new_task = new Book(req.body);
  
  Book.createBook(new_task, function(err, task) {
    
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.getBook = function(req, res) {
  Book.getTaskById(req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.updateBook = function(req, res) {
  Book.updateById(req.params.id, new Book(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.deleteBook = function(req, res) {


  Book.remove( req.params.id, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};
