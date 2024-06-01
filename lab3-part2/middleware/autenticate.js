const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");


function authenticateToken(req, res, next) {
    const token = req.cookies.token



  if (token == null) return res.sendStatus(401)



  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    next()
  })
}

module.exports = authenticateToken