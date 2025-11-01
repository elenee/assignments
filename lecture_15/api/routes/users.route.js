const {Router} =  require('express');
const { pagination, getUsers, deleteUser, updateUser, postUser } = require('../services/users.service');
const isAdminMiddleware = require('../../middleware/isAdmin.middleware');

const usersRouter = Router()

// usersRouter.get("/", (req, res) => {
//     res.send()
// })

usersRouter.get("/", pagination)

usersRouter.get("/:id", getUsers)

usersRouter.post("/", isAdminMiddleware, postUser)

usersRouter.put("/:id", isAdminMiddleware, updateUser)

usersRouter.delete("/:id", isAdminMiddleware, deleteUser)

module.exports = usersRouter