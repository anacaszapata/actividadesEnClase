const express= require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/api/estudiantes/users', userController.getAllUsers);
router.post('/api/estudiantes/users', userController.createUser);

module.exports = router;