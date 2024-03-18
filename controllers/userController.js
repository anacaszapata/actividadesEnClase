const User = require('../models/userModel');

// El controlador es el encargado de manejar la logica de negocio y crear los metodos correspondientes para manejar las solicitudes (obtener, crear, actualizar, eliminar)

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

    getUserByName: async(req,res) => {
        try{
            const {name} = req.params
            const byName = await User.findOne({name:name})
            res.json(byName)
        }catch(error) {
            console.error('Error al crear usuario:',error,);
            res.status(500).json({message:'Internal Server Error'});
        }
    },
    

    // Crear un nuevo usuario
    createUser: async(req, res) => {
        const userData= req.body;
        try{
            const newUser = new User(userData);
            const savedUser = await newUser.save();
            // el codigo de respuesta de estado de exito creado HTTP 201 Created indica que la solicitud en registro exitoso
            res.status(201).json(savedUser);
        }catch(error) {
            console.error('Error al crear usuario:',error,);
            res.status(500).json({message:'Internal Server Error'});
        }
    },
    updateUser: async (req,res)=>{
        try{
            const{name} =req.params

            const userUpdate = await User.findOneAndUpdate({name:name}, {$set: {name: 'Pedro'} })
            res.json(userUpdate)

        }catch(error){
            console.error('Error al crear usuario:',error,);
            res.status(500).json({message:'Internal Server Error'});
        }
    },
    deleteUser: async(req,res) =>{
        try{
            const{name} = req.params
            const deleteUser = await User.findOneAndDelete({name:name})
            res.json(deleteUser)
        }catch(error){
            console.error('Error al crear usuario:',error,);
            res.status(500).json({message:'Internal Server Error'});
        }
    }
};

module.exports = userController;