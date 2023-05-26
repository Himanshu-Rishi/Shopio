const express = require('express');
const { getallproducts, createproducts, updateproducts, deleteproducts, getproducts, createProductReview, getAllReview, deleteReview, getCategoryProduct, getAdminproducts, getProductReviews } = require('../controller/productcontroller');
const { isAuthenticated, isauthorized } = require('../middleware/auth');
const router = express.Router();

router.route("/products").get(getallproducts);


router.route("/admin/product/add").post(isAuthenticated, isauthorized("admin"), createproducts);
router.route("/admin/product/:id").put(isAuthenticated, isauthorized("admin"), updateproducts);
router.route("/admin/product/:id").delete(isAuthenticated, isauthorized("admin"), deleteproducts);
router.route("/admin/products").get(isAuthenticated, isauthorized("admin"), getAdminproducts);

router.route("/product/:id").get(getproducts);

router.route("/review").put(isAuthenticated,createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/reviews").delete(isAuthenticated,deleteReview);
module.exports = router