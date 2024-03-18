const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/estudiantes/users', userController.getAllUsers);
router.get('/api/estudiantes/nombre/:name', userController.getUserByName);
router.get('/api/estudiantes/id/:id', userController.getUserById);
router.post('/api/estudiantes/users', userController.createUser);
router.patch('/api/estudiantes/update/:name', userController.updateUser);
router.delete('/api/estudiantes/delete/:name', userController.deleteUser);

module.exports = router;