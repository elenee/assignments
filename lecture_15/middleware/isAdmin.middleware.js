module.exports = (req, res, next) => {
    if(!req.headers.admin || req.headers.admin !== 'admin') {
        return res.status(403).json({ message: "unauthorized request", data: null})
    }
    next()
} 