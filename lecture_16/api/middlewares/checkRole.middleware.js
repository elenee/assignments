const checkRoles = (roles) => (req, res, next) => {
    const role = req.headers.role
    
    if(!roles.includes(role)) {
        return res.status(403).json({message: 'unauthorized request'})
    } 

    next()
}

module.exports = checkRoles