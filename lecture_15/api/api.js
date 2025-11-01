const { Router } = require('express')
const usersRouter = require('./routes/users.route')
const productRouter = require('./routes/products.route')

const apiRouter = Router()

apiRouter.use("/users", usersRouter)
apiRouter.use("/products", productRouter)

apiRouter.get("/", (req, res) => {
    res.json('/ api roter')
})

module.exports = apiRouter