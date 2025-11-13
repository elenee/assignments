const { Router } = require('express')
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../services/product.service')
const productRouter = Router()

productRouter.get("/", getAllProducts)
productRouter.get("/:id", getProductById)
productRouter.post("/", createProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)


module.exports = productRouter