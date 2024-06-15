const {genSaltSync, hashSync} = require("bcryptjs")

const generateHash = (input) => {
    let salt = genSaltSync(10)
    let hash = hashSync(input, salt);

    return hash
} 

module.exports = {generateHash}