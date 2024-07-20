import { Router } from 'express';
import verifyUser from '#Middlewares/verifyUser.js';
import ModController from '#Controllers/mod.js';
import ModModel from '#Models/mod.js';

const createRouteMod = () => {
  const modRouter = Router();

  const modController = new ModController({ modModel: ModModel });

  modRouter.get('/', verifyUser, modController.getUsers);
  modRouter.post('/', verifyUser, modController.changeMod);

  return modRouter;
};

export default createRouteMod;
