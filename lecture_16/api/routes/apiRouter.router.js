const { Router } = require('express')
const ordersRouter = require('./orders.router')
const apiRouter = Router()

apiRouter.use("/orders", ordersRouter)

apiRouter.get('/', (req, res) => {
    res.json('api router')
})

module.exports = apiRouter