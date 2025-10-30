const express = require('express');
const app = express()
const PORT = 3000
app.use(express.json())

const animals = [
    {
        id: 1,
        species: 'Cat',
        color: 'black',
        age: 8
    },
    {
        id: 2,
        species: 'Cat',
        color: 'black',
        age: 8
    },
    {
        id: 3,
        species: 'Cat',
        color: 'black',
        age: 8
    },

]

app.get('/', async (req, res) => {
    res.json('test route')
})


app.get('/animals', async (req, res) => {
    res.json(animals)
})

app.get('/animals/:id', async (req, res) => {
    const { id } = req.params
    const foundAnimal = animals.find(el => el.id === Number(id))
    if(!foundAnimal) {
        return res.status(404).json({message: 'not found', data: null})
    }
    res.json({data: foundAnimal})
})

app.post("/api", async (req, res) => {
    const {species, age, color} = req.body
    if(!species || !age || !color) {
        return res.status(400).json({message: 'all fields are required', data: null})
    }
    const newObj = {
        id: animals.length + 1,
        species,
        age,
        color
    }
    animals.push(newObj)
    res.json(animals)
})

app.delete("/animals/:id", async (req, res) => {
    const { id } = req.params;
    const index = animals.findIndex(el => el.id === Number(id))
    if(index === -1) return res.status(404).json({message: 'id is invalid', data:null})
    
    const deletedAnimal = animals.splice(index, 1)
    res.json({ message: 'deleted successfully', data: deletedAnimal})
})

app.put("/animals/:id", async (req, res) => {
    const { id } = req.params;
    const {species, age, color} = req.body
    
    const index = animals.findIndex(el => el.id === Number(id))
    if(index === -1) return res.status(404).json({message: 'id is invalid', data:null})
    
    animals[index] = {
        ...animals[index],
        species: species || animals[index].species,
        age: age || animals[index].age,
        color: color || animals[index].color,
    }

    res.json({ message: 'updated successfully', data: animals[index]})
})


app.get("/animals", async (req, res) => {
    let { page=1, take=3 } = req.query;
    if(take > 3) take = 3;
    const paginatedData = animals.slice((page - 1 ) *  take, page * take);
    res.json({ data: paginatedData})
})


// app.listen(PORT, () => { console.log(`server running on http://localhost${PORT}`) })

// npm corse