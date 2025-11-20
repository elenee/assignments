const express = require("express")
const cors = require('cors')
const connectMongo = require("./config/connectToDB")
const app = express()
const userRouter = require("./routes/user.route")
const authRouter = require("./auth/auth.route")
const postRouter = require("./routes/post.route")
const isAuth = require("./middlewares/isAuth.middleware")

app.use(cors())
app.use(express.json())
connectMongo();

app.use("/users", userRouter)
app.use("/posts", isAuth, postRouter)
app.use("/auth", authRouter)

app.get("/", async (req, res) => {
    res.json('get req')
})

app.listen(3030, () => console.log("http://localhost:3030"))