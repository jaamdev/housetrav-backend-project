import { Router } from 'express';
import verifyUser from '#Middlewares/verifyUser.js';
import verifyPropertyOwner from '#Middlewares/verifyPropertyOwner.js';
import PropertiesController from '#Controllers/properties.js';
import PropertiesModel from '#Models/properties.js';

const createRouteProperties = () => {
  const propertiesRoute = Router();

  const propertiesController = new PropertiesController({
    propertiesModel: PropertiesModel,
  });

  propertiesRoute.get(
    '/:id',
    verifyUser,
    verifyPropertyOwner,
    propertiesController.getPropertyId,
  );
  propertiesRoute.get('/', verifyUser, propertiesController.getUserProperties);
  propertiesRoute.post('/', verifyUser, propertiesController.createProperty);
  propertiesRoute.patch(
    '/:id',
    verifyUser,
    verifyPropertyOwner,
    propertiesController.updateProperty,
  );
  propertiesRoute.delete(
    '/:id',
    verifyUser,
    verifyPropertyOwner,
    propertiesController.removeProperty,
  );

  return propertiesRoute;
};

export default createRouteProperties;
