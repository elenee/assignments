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


const pagination = (req, res) => {
    let { page = 1, take = 5} = req.query
    if(take > 5) take = 5
    const paginatedData = users.slice((page - 1) * take, page * take)
    res.json({ message: 'users', data: paginatedData})  
}

const getUsers = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === Number(id))
    if(!foundUser) return res.status(404).json({ message: 'invalid id', data: null })
    
    res.status(200).json({ message: 'found user', data: foundUser})
}

const postUser = (req, res) => {
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
}

const updateUser = (req, res) => {
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
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id === Number(id))
    if(index === -1) return res.status(404).json({ message: 'invalid id', data: null})
    
    const deletedUser = users.splice(index, 1)
    res.status(200).json({ message: 'user deleted successfully', data: deletedUser[0]})
}

module.exports = {pagination, getUsers, postUser, deleteUser, updateUser}