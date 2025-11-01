module.exports = (req, res, next) => {
    const isAdmin = req.headers.admin;
    const isEditor = req.headers.editor;

    if(isAdmin || isEditor) {
        next();
    } else {
        return res.status(403).json({ message: "unauthorized request", data: null })
    }
    
}