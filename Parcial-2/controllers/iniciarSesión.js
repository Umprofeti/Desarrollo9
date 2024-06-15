const {Usuario} = require('../models/schema'); // Update with the correct path
const bcrypt = require('bcryptjs');
const generateAccessToken = require("../lib/genJWT")

const loginUser = async (req, res) => {
    try {
        // Find the user by username or email
        const usuario = await Usuario.findOne({ 
            correo: req.body.correo 
        });

        if (!usuario) {
            return res.status(404).send('Usuario/Correo o contraseña incorrecto');
        }

        const validPassword = bcrypt.compareSync(req.body.password, usuario.password);
    

        if (!validPassword) {
            return res.status(400).send('contraseña incorrecta');
        }

        
        const token =  generateAccessToken({usuario:usuario._id})
        usuario.JWT_TOKEN = token;
        await usuario.save();

        res.cookie('token', token, { httpOnly: true });
        res.set('Authorization', `Bearer ${token}`);
        res.status(200).send({ auth_token: token });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = loginUser