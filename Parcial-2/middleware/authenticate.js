const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

function authenticateToken(req, res, next) {
    const token = req.cookies.auth_token
    console.log(req.cookies)


    if (token == null) return res.sendStatus(401); 

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err);
            return res.sendStatus(403); 
        }

        req.user = user; 
        next(); 
    });
}

module.exports = authenticateToken;