const ProductController = require('../controllers/product.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = function(app){
    app.get('/api/products/', authenticate, ProductController.getAll)
    app.post('/api/products/',authenticate, ProductController.createProduct)
    app.get('/api/products/', authenticate, ProductController.getAll);
    app.get('/api/products/:id', authenticate, ProductController.getProduct); //Para ver detalles

}


