import fs from 'node:fs';
import path from 'node:path';
import { initialState, sendObject } from '#Utils/utils.js';
import validatePropertyFields from '#Utils/validatePropertyFields.js';

export default class PropertiesController {
  constructor({ propertiesModel }) {
    this.propertiesModel = propertiesModel;
  }

  getPropertyId = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    if (!id || !userId)
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const [response] = await this.propertiesModel.getPropertyId({ id });

    return res.json(
      sendObject({ message: ['Petición aceptada'], data: response }),
    );
  };

  getUserProperties = async (req, res) => {
    const userId = req.user.id;

    if (!userId)
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const result = await this.propertiesModel.getUserProperties({ userId });

    if (result.length === 0)
      return res.json(sendObject({ error: ['Sin inmuebles registrados'] }));

    return res.json(
      sendObject({ message: ['Petición aceptada'], data: result }),
    );
  };

  createProperty = async (req, res) => {
    const userId = req.user.id;
    req.body.userId = userId;

    if (!userId)
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    if (!req.body)
      return res
        .status(503)
        .json(sendObject({ error: ['Servicio no disponible'] }));

    const validate = validatePropertyFields(req.body);
    if (!validate.success) {
      const issues = validate.issues.map((e) => e.message);
      return res.status(400).json(sendObject({ error: issues }));
    }
    const result = await this.propertiesModel.createProperty({
      input: validate.output,
    });

    if (!result)
      return res
        .status(503)
        .json(sendObject({ error: ['Su inmueble no pudo ser registrado'] }));

    return res.status(201).json(
      sendObject({
        message: ['Su inmueble ha sido registrado'],
      }),
    );
  };

  updateProperty = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    if (!id || !userId)
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    req.body.id = id;
    req.body.userId = userId;

    const validate = validatePropertyFields(req.body);
    if (!validate.success) {
      const issues = validate.issues.map((e) => e.message);
      return res.status(400).json(sendObject({ error: issues }));
    }

    const updateState = {
      ...structuredClone(initialState),
      ...structuredClone(validate.output),
    };

    const result = await this.propertiesModel.updateProperty({
      input: updateState,
    });

    if (!result)
      return res
        .status(401)
        .json(sendObject({ error: ['Su inmueble no pudo ser actualizado'] }));

    return res.status(200).json(
      sendObject({
        message: ['Su inmueble ha sido actualizado'],
      }),
    );
  };

  removeProperty = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;

    if (!id || !userId)
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const result = await this.propertiesModel.removeProperty({ id, userId });

    if (!result.removed)
      return res.json(
        sendObject({ error: ['El inmueble no se pudo eliminar'] }),
      );

    if (result?.images.length !== 0) {
      const fileNames = result.images;

      fileNames.forEach((item) => {
        fs.unlink(path.join('public/images/', item.imgUrl), (err) => {
          if (err) console.error(`${item.imgUrl} no se pudo borrar. ${err}`);
        });
      });
    }

    return res.json(sendObject({ message: ['El inmueble fue eliminado'] }));
  };
}
