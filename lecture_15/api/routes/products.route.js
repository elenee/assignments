const {Router} = require('express')
const { getPaginatedData, getProductById, addProduct, updateProduct, deleteProduct } = require('../services/products.service')
const isAdminMiddleware = require('../../middleware/isAdmin.middleware')
const isAdminOrEditorMiddleware = require('../../middleware/isAdminOrEditor.middleware')

const productRouter = Router()

productRouter.get("/", getPaginatedData)
productRouter.get("/:id", getProductById)
productRouter.post("/", addProduct)
productRouter.put("/:id", isAdminOrEditorMiddleware, updateProduct)
productRouter.delete("/:id", isAdminMiddleware, deleteProduct)
module.exports = productRouter