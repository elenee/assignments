const {Router} =  require('express');
const { pagination, getUsers, deleteUser, updateUser, postUser } = require('./users.service');
const isAdminMiddlware = require('../../middleware/isAdmin.middleware');

const usersRouter = Router()

// usersRouter.get("/", (req, res) => {
//     res.send()
// })

usersRouter.get("/", pagination)

usersRouter.get("/:id", getUsers)

usersRouter.post("/", isAdminMiddlware, postUser)

usersRouter.put("/:id", isAdminMiddlware, updateUser)

usersRouter.delete("/:id", isAdminMiddlware, deleteUser)

module.exports = usersRouter