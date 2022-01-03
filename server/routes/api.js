const express = require('express');

const {
  login,
  logout,
  validateToken,
  registerUser,
  readData,
  updateData,
  deleteData,
} = require('../controllers/user_controller');

const router = express.Router();

router
  .post('/login', login)
  .get('/logout', logout)
  .get('/validate', validateToken)
  .post('/', registerUser)
  .get('/', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData);

module.exports = router;