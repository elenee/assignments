const express = require('express')
const connectToDB = require('./config/connectToDB')
const PORT = 3030

const app = express()
connectToDB()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))