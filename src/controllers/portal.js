import { sendObject } from '#Utils/utils.js';

export default class PortalController {
  constructor({ portalModel }) {
    this.portalModel = portalModel;
  }

  getAll = async (_, res) => {
    const result = await this.portalModel.getAll();

    if (result.length === 0)
      return res
        .status(202)
        .json(sendObject({ error: ['Sin propiedades registradas'] }));

    return res.json(
      sendObject({
        data: result,
        message: ['Petición aceptada'],
      }),
    );
  };

  getId = async (req, res) => {
    const { id } = req.params;

    if (!id)
      return res.json(sendObject({ error: ['Se necesita un ID válido'] }));

    const { result, fileNames } = await this.portalModel.getId({ id });

    if (result.length === 0)
      return res.json(sendObject({ error: ['Ese inmueble no existe'] }));

    const response = structuredClone(result[0]);

    if (fileNames.length !== 0) {
      const images = fileNames.map((item) => item.imgUrl);
      response.images = images;
    } else {
      response.images = [];
    }

    return res.json(
      sendObject({ data: [response], message: ['Petición aceptada'] }),
    );
  };
}
