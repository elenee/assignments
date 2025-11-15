const jwt = require('jsonwebtoken');

function getToken(headers) {
  const authHeader = headers['authorization'];
  if (!authHeader) return null;

  const parts = authHeader.split(" ");
  if (parts.length !== 2) return null;

  const [type, token] = parts;
  return type.toLowerCase() === 'bearer' ? token : null;
}

async function isAuth(req, res, next) {
  const token = getToken(req.headers);
  if (!token) return res.status(401).json({ message: 'Permission denied', data: null });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token', data: null });
  }
}

module.exports = isAuth;
