const User = require("../models/userModel");

const userController = {
  // obtener todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const userId = await User.findById(id);
      res.json(userId);
    } catch (error) {
      console.log("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { name } = req.params;

      const userUpdate = await User.findOneAndUpdate(
        { name: name },
        { $set: { name: "Sofia" } }
      );
      res.json(userUpdate);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { name } = req.params;
      const deleteUser = await User.findOneAndDelete({ name: name });
      res.json(deleteUser);
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};


module.exports = userController;