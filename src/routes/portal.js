import { Router } from 'express';
import PortalController from '#Controllers/portal.js';
import PortalModel from '#Models/portal.js';

const createRoutePortal = () => {
  const portalRoute = Router();

  const portalController = new PortalController({
    portalModel: PortalModel,
  });

  portalRoute.get('/', portalController.getAll);
  portalRoute.get('/:id', portalController.getId);

  return portalRoute;
};

export default createRoutePortal;
