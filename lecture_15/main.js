const express = require('express')
const apiRouter = require('./api/api')
const secretRouter = require('./secret/secret.route')
const logger = require('./middleware/logger.middleware')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(logger)

app.use("/api", apiRouter);
app.use("/secret", secretRouter)

app.get('/', (req, res) => {
    res.json('/ route')
})

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`))