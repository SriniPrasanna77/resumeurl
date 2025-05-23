const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(payload) {
    const secretKey = process.env.JWT_SECRET_KEY; // Use a strong, randomly generated secret key and store it securely.
    const options = {
        expiresIn: '1h', // Token expiration time (optional)
    };
    return jwt.sign(payload, secretKey, options);
}

module.exports = { generateToken };