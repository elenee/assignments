const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const users = [
    {
        id: 1,
        name: 'elene',
        age: 21,
        email: 'elene@gmail.com',
        eyecolor: 'brown',
    },
     {
        id: 2,
        name: 'keti',
        age: 21,
        email: 'keti@gmail.com',
        eyecolor: 'hazel',
    },
]


app.get('/', (req, res) => {
    res.json('/ route')
})

app.get("/users", (req, res) => {
    let { page = 1, take = 5} = req.query
    if(take > 5) take = 5
    const paginatedData = users.slice((page - 1) * take, page * take)
    res.json({ message: 'users', data: paginatedData})  
})

app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === Number(id))
    if(!foundUser) return res.status(404).json({ message: 'invalid id', data: null })
    
    res.status(200).json({ message: 'found user', data: foundUser})
})

app.post("/users", (req, res) => {
    const { name, age, email, eyecolor } = req.body;
    if(!name || !age) return res.status(400).json({ message: 'name and age is required', data: null })
    if(age < 10 || age > 30 ) return res.status(400).json({ message: 'age must be between 10 and 30', data: null})

    let lastIndex = users[users.length - 1]?.id || 0;
    const newUser = {
        id: lastIndex + 1,
        name,
        age,
        email,
        eyecolor
    }
    users.push(newUser)
    res.status(201).json({ message: 'user added successfully', data: newUser })
})

app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email, eyecolor} = req.body;

    const index = users.findIndex(user => user.id === Number(id))
    if(index === -1) return res.status(404).json({ message: "invalid id", data: null })
    
    if(age && (age < 10 || age > 30)) return res.status(400).json({ message: 'age must be between 10 and 30', data: null})
    users[index] = {
        ...users[index],
        name: name || users[index].name,
        age: age || users[index].age,
        email: email || users[index].email,
        eyecolor: eyecolor || users[index].eyecolor
    }

    res.json({ message: "updated successfully", data: users[index] })
})

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === Number(id))
    if(index === -1) return res.status(404).json({ message: 'invalid id', data: null})
    
    const deletedUser = users.splice(index, 1)
    res.status(200).json({ message: 'user deleted successfully', data: deletedUser[0]})
})


app.get("/secret", (req, res) => {
    const secretKey = req.headers.secret
    if(!secretKey || secretKey !== '1234') {
        res.status(403).json({ message: "unauthorized request", data: null })
    }    
    return res.json({message: 'secret info', data: secretKey})
})

app.listen(PORT, console.log(`server running on http://localhost:${PORT}`))