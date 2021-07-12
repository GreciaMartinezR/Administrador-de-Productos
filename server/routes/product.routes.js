const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/products/',ProductController.getAll)
    app.post('/api/products/', ProductController.createProduct)
}
