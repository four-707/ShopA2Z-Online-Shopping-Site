const express = require("express");
const router = express.Router();
const path = require("path");

// const rootDir=require('../util/path.js')
// const adminData=require('./admin.js')
const shopControllers = require("../controllers/shop");

// shop/ GET
router.get("/", shopControllers.getIndex);
router.get("/products", shopControllers.getproducts);
router.get("/products", shopControllers.getproducts);

//dynamic routes using :
router.get("/products/:productId", shopControllers.getProduct);

router.get("/cart", shopControllers.getCart);
router.post("/cart", shopControllers.postCart);
router.post("/cart-delete-item", shopControllers.postCartDeleteItem);

router.get("/checkout", shopControllers.getCheckout);
router.get("/orders", shopControllers.getOrders);

module.exports = router;
