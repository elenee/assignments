module.exports = (req, res, next) => {
    const secretKey = req.headers.secret
    if(!secretKey || secretKey !== '1234') {
        return res.status(403).json({ message: "unauthorized request", data: null })
    }
    next()
}