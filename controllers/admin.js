const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add-Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) {
      return res.redirect("/");
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit-Product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  // console.log(req.body);
  const id = req.body.productId;

  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  console.log(id, "  ", title);
  const updatedproduct = new Product(id, title, imageUrl, description, price);
  updatedproduct.save();
  res.redirect("/admin/products");
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  // console.log(req.body);
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  // decsription="kjhkjnkcnnlw";
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.productId;
  Product.deleteProductbyId(id);
  res.redirect("/admin/products");
};

// exports.postEditProduct=(req,res)=>{
//    const productId=req.body.productId;
//    const updatedProduct=new Product(req.body.productId,req.body.title,req.body.imageUrl,req.body.description,req.body.price)
//    updatedProduct.save();
// }
