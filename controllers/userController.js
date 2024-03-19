const User = require('../models/userModel');

const userController = {
    // obtener todos los usuarios
    getAllUsers: async(req, res) => {
        try{
            const users = await User.find();
            res.json(users);
        }catch (error) {
            console.error('Error al obtener usuarios:',error);
            res.status(500).json({message:'Internal Server Error'});
        }
    },
};
getUserById: async(req, res) => {
    const id = req.params.id
    try{
        const userId = await User.findById(id)
        res.json(userId)
    }catch (error) {
        console.log('Error al obtener usuarios:',error);
        res.status(500).json({message:'Internal Server Error'});
    }
},