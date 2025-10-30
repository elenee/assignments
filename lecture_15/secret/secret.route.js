const { Router } = require('express')
const validApiMiddleware = require('../middleware/validApi.middleware')

const secretRouter = Router()

secretRouter.get("/", validApiMiddleware, (req, res) => {
    return res.json({message: 'secret info'})
})

module.exports = secretRouter

