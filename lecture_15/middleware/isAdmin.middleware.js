module.exports = (req, res, next) => {
    const isAdminRole = req.headers.admin;
    if(!isAdminRole || isAdminRole !== "admin") {
        return res.status(403).json({ message: 'unauthorized request', data: 'not an admin' })
    }
    next()
}