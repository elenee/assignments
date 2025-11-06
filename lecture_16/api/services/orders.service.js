const orders = [
    {
        id: 1,
        productName: 'first order',
        quantity: 2,
        totalPrice: 3,
        status: ''
    },
    {
        id: 2,
        productName: 'second order',
        quantity: 2,
        totalPrice: 3,
        status: ''
    },
    {
        id: 3,
        productName: 'third order',
        quantity: 2,
        totalPrice: 3,
        status: ''
    },
]

const getAllOrders = (req, res) => {
    let { page = 1, take = 5 } = req.query
    take > 5 ? take = 5 : take
    const paginatedData = orders.slice((page - 1) * take, page * take)
    res.status(200).json(paginatedData)
}

const getOrderById = (req, res) => {
    const { id } = req.params;
    const foundOrder = orders.find(item => item.id === Number(id))
    if(!foundOrder) return res.status(404).json({ message: 'Order not Found', data: null})
    
    return res.status(200).json({message: 'Found Order', data: foundOrder})
}

const createOrder = (req, res) => {
    const { productName, quantity, totalPrice, status } = req.body;
    if(!productName) return res.status(403).json({ message: 'Product name is required', data: null})
    if(quantity > 10) return res.status(403).json({message: "quantity shouldn't exceed 10"})
    if(totalPrice > 500) return res.status(403).json({ message: "Total price shouldn't exceed 500"})
    
    const lastIndex = orders[orders.length - 1]?.id || 0;
    const newOrder = {
        id: lastIndex + 1,
        productName,
        quantity,
        totalPrice, 
        status
    }

    orders.push(newOrder)
    return res.status(200).json({ message: 'Order added successfully', data: newOrder })
}

const updateOrder = (req, res) => {
    const {id} = req.params;
    const { productName, quantity, totalPrice, status } = req.body;
    
    const index = orders.findIndex(item => item.id === Number(id));
    if(index === -1) return res.status(404).json({ message: 'Order not Found', data: null})
    
    if(quantity > 10) return res.status(403).json({message: "quantity shouldn't exceed 10"})
    if(totalPrice > 500) return res.status(403).json({ message: "Total price shouldn't exceed 500"})
    
    orders[index] = {
        ...orders[index],
        productName: productName || orders[index].productName,
        quantity: quantity || orders[index].quantity,
        totalPrice: totalPrice || orders[index].totalPrice,
        status: status || orders[index].status,
    }

    
    return res.status(200).json({ message: 'oder updated', data: orders[index]})
}

const updateStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if(!status) return res.status(400).json({ message: 'Status is required', data: null})

    const index = orders.findIndex(item => item.id === Number(id))
    if(index === -1) return res.status(404).json({ message: 'Order not Found', data: null})

    orders[index] = {
        ...orders[index],
        status,
    }

    return res.status(200).json({ message: 'status updated', data: orders[index]})
}

const deleteOrder = (req, res) => {
    const {id} = req.params;
    const index = orders.findIndex(item => item.id === Number(id));
    if(index === -1) return res.status(404).json({ message: 'Order not Found', data: null})

    const deletedOrder = orders.splice(index, 1)

    return res.status(200).json({ message: 'oder deleted', data: deletedOrder})

}


module.exports = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder, updateStatus }