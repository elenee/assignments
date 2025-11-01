const { Router } = require('express')
const isValidApiMiddleware = require('../middleware/isValidApi.middleware')

const secretRouter = Router()

secretRouter.get("/", isValidApiMiddleware, (req, res) => {
    return res.json({message: 'secret info'})
})

module.exports = secretRouter

