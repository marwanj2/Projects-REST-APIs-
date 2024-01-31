import express from 'express';

import { getAllUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();


// all routes in here are starting with /users
router.get('/', getAllUsers);

router.post('/', createUser)

router.get('/:id', getUser )

router.delete('/:id', deleteUser )

// update user
router.patch('/:id', updateUser )


export default router;