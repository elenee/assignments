const {Router} = require('express')
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, updateStatus } = require('../services/orders.service')
const checkRole = require('../middlewares/checkRole.middleware')
const ordersRouter = Router()

ordersRouter.get("/", getAllOrders)
ordersRouter.get("/:id", getOrderById)
ordersRouter.post("/", checkRole(['isAdmin']), createOrder)
ordersRouter.put("/:id", checkRole(['isAdmin']), updateOrder)
ordersRouter.patch("/:id", checkRole(['isAdmin', 'isEditor']), updateStatus)
ordersRouter.delete("/:id", checkRole(['isAdmin']), deleteOrder)

module.exports = ordersRouter