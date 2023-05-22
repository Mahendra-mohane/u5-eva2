const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticateAccessToken, authorizeRole } = require('../middlewares/authMiddleware');

router.get('/', authenticateAccessToken, productController.getProducts);
router.post('/', authenticateAccessToken, authorizeRole('seller'), productController.addProduct);
router.delete('/:productId', authenticateAccessToken, authorizeRole('seller'), productController.deleteProduct);

module.exports = router;
