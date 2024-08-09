const statictoken = "dhavalpatel"

function token(req, res, next) {
    const token = req.headers['authorization'];

    if (token && token === statictoken) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports = token;