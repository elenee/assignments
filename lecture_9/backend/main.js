const express = require("express")
const connectMongo = require("./db/connectToMongo")
const productsScheme = require("./scheme/products")
const { isValidObjectId } = require("mongoose")

const app = express()
app.use(express.json())

connectMongo()

app.get("/", async(req, res) => {
    res.send("Hello world")
})

app.get("/products", async (req, res) => {
    try {
        const products = await productsScheme.find()
        res.json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error"})
    }
})

app.get("/products/:id", async (req, res) => {
    let {id} = req.params
    if(!isValidObjectId(id)) {
        return res.status(400).json({message: 'Invalid Mongo id'})
    }

    let findProductById = await productsScheme.findById(id)
    res.json(findProductById)
})

app.post("/products", async (req, res) => {
    let {name, price, category, description} = req.body
    if(!name || !price || !category || !description) {
        return res.status(400).json({ message: "all is required" })
    }

    let newProduct = await productsScheme.create({name, price, category, description})
    res.json(newProduct)
})

app.put("/products/:id", async (req, res) => {
    let {id} = req.params
    let {name, price, category, description} = req.body

    if(!isValidObjectId(id)) {
        return res.status(400).json({message: 'Invalid Mongo id'})
    }

    let updatedProduct = await productsScheme.findByIdAndUpdate(
        id, 
        { name, price, category, description }, 
        { new: true }
    );
    res.json(updatedProduct)
})


app.delete("/products/:id", async (req, res) => {
    let {id} = req.params
     if(!isValidObjectId(id)) {
        return res.status(400).json({message: 'Invalid Mongo id'})
    }

    let deletedProduct = await productsScheme.findByIdAndDelete(id)
    res.json(deletedProduct)
})


app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
})