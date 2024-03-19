const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/estudiantes/users', userController.getAllUsers);
router.get('/api/estudiantes/id/:id', userController.getUserById);