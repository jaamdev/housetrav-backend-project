import { Router } from 'express';
import { sendObject } from '#Utils/utils.js';
import verifyUser from '#Middlewares/verifyUser.js';
import UsersController from '#Controllers/users.js';
import UsersModel from '#Models/users.js';

const createRouteUsers = () => {
  const usersRouter = Router();

  const userController = new UsersController({ usersModel: UsersModel });

  usersRouter.get('/profile', verifyUser, userController.profile);
  usersRouter.delete('/profile', verifyUser, userController.removeProfile);
  usersRouter.post('/signin', userController.login);
  usersRouter.post('/signup', userController.register);
  usersRouter.get('/logout', (_, res) => {
    return res
      .clearCookie('token')
      .json(sendObject({ message: ['Sesión cerrada'] }));
  });

  return usersRouter;
};

export default createRouteUsers;
