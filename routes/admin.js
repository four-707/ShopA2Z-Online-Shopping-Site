const express = require("express");
const { read } = require("fs");
const path = require("path");
const router = express.Router();

// const rootDir=require('../util/path.js')
const adminControllers = require("../controllers/admin");

// admin/add-product GET
router.get("/add-product", adminControllers.getAddProduct);

//edit product
router.get("/edit-product/:productId", adminControllers.getEditProduct);
router.post("/edit-product", adminControllers.postEditProduct);

//admin/products GET
router.get("/products", adminControllers.getProducts);

// admin/add-product POST
router.post("/add-product", adminControllers.postAddProduct);

//delete product
router.post("/delete-product", adminControllers.postDeleteProduct);

// module.exports=router;
module.exports = router;
