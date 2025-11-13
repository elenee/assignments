const express = require('express')
const connectMongo = require('./config/connectToDB')
const productRouter = require('./routes/product.route')
const PORT = 3030

const app = express()
app.use(express.json())
connectMongo()

app.use('/products', productRouter)

app.get("/", async (req, res) => {
    res.json('get req')
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))