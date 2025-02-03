const productcontroller = require('../control/productcontroller')
const router = require('express').Router()


router.get('/api/products', productcontroller.getAllProducts);
router.get('/api/product/:id', productcontroller.getSingleProduct);
router.post('/api/product',productcontroller.addNewProduct); 
router.put('/api/updproduct',productcontroller.updateProduct);
router.delete('/api/product/:id',productcontroller.deleteProduct);

module.exports = router