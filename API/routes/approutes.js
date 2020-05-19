module.exports = function(app) {
    var todoList = require('../controller/appController');
  
    app.route('/books')
      .get(todoList.allBooks)
      .post(todoList.addBook);
     
    app.route('/books/:id')
      .get(todoList.getBook)
      .put(todoList.updateBook)
      .delete(todoList.deleteBook);
    app.route('/order')
      .post(todoList.addOrder);
    app.route('/order/:id')
      .get(todoList.getOrder);
    app.route('/user')
      .post(todoList.adduser);
      };
