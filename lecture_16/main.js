const express = require('express')
const apiRouter = require('./api/routes/apiRouter.router')
const logger = require('./api/middlewares/logger.middleware')
const secretRouter = require('./api/secret/secret.route')
const app = express()
const PORT = 3030

app.use(express.json())
app.use(logger)
app.use('/secret', secretRouter)

app.use('/api', apiRouter)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
