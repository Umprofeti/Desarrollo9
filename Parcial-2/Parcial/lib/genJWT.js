const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")

dotenv.config();


function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

module.exports = generateAccessToken;