import express from 'express';
import {
  getUsers, getUser, createUser, updateUser, deleteUser,
} from './controller';

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
