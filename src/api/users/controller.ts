import { Request, Response } from 'express';
import User from './interface';

const users:User[] = [
  {
    id: 1,
    name: 'John',
  },
];

export const getUsers = (_:Request, res:Response) => {
  res.send(users);
};

export const getUser = (req:Request, res:Response) => {
  const user = users.find((u:User) => u.id === parseInt(req.params.id as string, 10));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
};

export const createUser = (req:Request, res:Response) => {
  const user = req.body;
  if (!user.name) {
    res.status(400).send('Name is required');
  } else {
    const maxId = users.reduce((max, u) => Math.max(max, u.id), 0);
    user.id = maxId + 1;
    users.push(user);
    res.send({
      message: 'User created',
    });
  }
};

export const updateUser = (req:Request, res:Response) => {
  const user = users.find((u:User) => u.id === parseInt(req.params.id as string, 10));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    const updatedUser = req.body;
    if (updatedUser.name) {
      user.name = updatedUser.name;
    }
    res.send({
      message: 'User updated',
    });
  }
};

export const deleteUser = (req:Request, res:Response) => {
  const user = users.find((u:User) => u.id === parseInt(req.params.id as string, 10));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.send({
      message: 'User deleted',
    });
  }
};
