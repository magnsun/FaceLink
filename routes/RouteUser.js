const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definerer ruterne for CRUD-operationer
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);




// Eksporterer routeren så den kan bruges i app.js
module.exports = router;