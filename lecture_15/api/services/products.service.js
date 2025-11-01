const products = [
    {
        id: 1,
        name: 'a',
        price: 2,
        category: 'b',
        isExpire: false,
    },
    {
        id: 2,
        name: 'a',
        price: 2,
        category: 'b',
        isExpire: false,
    },
    {
        id: 3,
        name: 'a',
        price: 2,
        category: 'b',
        isExpire: false,
    },
]


const getPaginatedData = (req, res) => {
    let { page = 1, take = 10 } = req.query;
    if(take > 10) take = 10;
    const paginatedData = products.slice((page - 1) * take, page * take)
    res.json({ message: 'products', data: paginatedData}) 
}

const getProductById = (req, res) => {
    const {id} = req.params;
    const foundProduct = products.find(el => el.id === Number(id))
    if(!foundProduct) res.status(404).json({ message: 'invalid id', data: null})
    
    return res.json({ message: 'found product', data: foundProduct})
}

const addProduct = (req, res) => {
    const { name, price, category, isExpire } = req.body;
    console.log(req.body)
    if(!name || !price || !category || isExpire === undefined ) {
        return res.status(400).json({ message: 'all fields are required', data: null })
    }
    if(price > 200) {
        return res.status(404).json({ message: "price mustn't exeed 200", data: null })
    }
    let lastIndex = products[products.length - 1]?.id || 0
    const newProd = {
        id: lastIndex + 1,
        name,
        price,
        category,
        isExpire
    }
    products.push(newProd)
    return res.status(201).json({ message: 'product added successfully', data: newProd})
}

const updateProduct = (req, res) => {
    const {id} = req.params
    const { name, price, category, isExpire } = req.body;

    const index = products.findIndex(el => el.id === Number(id))
    if(index === -1) return res.status(400).json({ message: 'invalid id', data: null })
    
    products[index] = {
        ...products[index],
        name: name || products[index].name,
        price: price || products[index].price,
        category: category || products[index].category,
        isExpire: isExpire || products[index].isExpire
    }

    return res.json({ message: "updated product", data: products[index]})
}

const deleteProduct = (req, res) => {
    const {id} = req.params
    const index = products.findIndex(el => el.id === Number(id))
    if(index === -1) return res.status(404).json({ message: 'invalid id', data: null})
    
    const deletedProduct = products.splice(index, 1)
    return res.status(200).json({ message: 'product deleted', data: deletedProduct })
}

module.exports = { getPaginatedData, getProductById, addProduct, updateProduct, deleteProduct }
