const express = require('express');
const {
 UserFind, UserCreate, UserUpdate, UserDelete, UserFindById,
} = require('../controller/userController');

const router = express.Router();

router.get('/users', UserFind);

router.get('/users/:id', UserFindById);

router.post('/users', UserCreate);

router.get('/users/:id', UserUpdate);

router.get('/users/:id', UserDelete);

module.exports = router;
