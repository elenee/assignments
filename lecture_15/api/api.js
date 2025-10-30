const { Router } = require('express')
const usersRouter = require('./users/users.route')

const apiRouter = Router()

apiRouter.use("/users", usersRouter)

apiRouter.get("/", (req, res) => {
    res.json('/ api roter')
})

module.exports = apiRouter