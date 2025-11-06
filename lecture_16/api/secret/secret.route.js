const {Router} = require('express')
const checkRoles = require('../middlewares/checkRole.middleware')

const secretRouter = Router()

secretRouter.get("/", checkRoles(['isAdmin']), (req, res) => {
    res.json('secret route')
})

module.exports = secretRouter