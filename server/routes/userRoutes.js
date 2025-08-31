const express = require('express');
const router = express.Router();
const {
  getUsers,
  createUser,
  getUserById,
} = require('../controllers/userController');

// GET all users
router.get('/', getUsers);

// POST create user
router.post('/', createUser);

// GET user by ID
router.get('/:id', getUserById);

module.exports = router;
