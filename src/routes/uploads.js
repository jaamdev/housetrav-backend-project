import { Router } from 'express';
import uploadAvatar from '#Middlewares/uploadAvatar.js';
import uploadImage from '#Middlewares/uploadImage.js';
import verifyUser from '#Middlewares/verifyUser.js';
import verifyPropertyOwner from '#Middlewares/verifyPropertyOwner.js';
import UploadsController from '#Controllers/uploads.js';
import UploadsModel from '#Models/uploads.js';

const createRouteUploads = () => {
  const uploadsRouter = Router();

  const uploadsController = new UploadsController({
    uploadsModel: UploadsModel,
  });

  uploadsRouter.post(
    '/avatar',
    verifyUser,
    uploadAvatar,
    uploadsController.avatar,
  );

  uploadsRouter.get('/images/:id', uploadsController.getPropertyImages);

  uploadsRouter.post(
    '/images/:id',
    verifyUser,
    verifyPropertyOwner,
    uploadImage,
    uploadsController.postPropertyImages,
  );

  uploadsRouter.delete(
    '/images/:id',
    verifyUser,
    verifyPropertyOwner,
    uploadsController.deletePropertyImages,
  );

  return uploadsRouter;
};

export default createRouteUploads;
