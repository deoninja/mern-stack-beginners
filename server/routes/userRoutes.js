const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/').get(authMiddleware, getUsers).post(createUser);
router.route('/login').post(loginUser);
router
  .route('/:id')
  .get(authMiddleware, getUserById)
  .put(authMiddleware, updateUser)
  .delete(authMiddleware, deleteUser);

module.exports = router;