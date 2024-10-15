import fs from 'node:fs';
import path from 'node:path';
import { sendObject } from '#Utils/utils.js';

export default class UploadsController {
  constructor({ uploadsModel }) {
    this.uploadsModel = uploadsModel;
  }

  avatar = async (_, res) => {
    return res.json(
      sendObject({
        message: ['La imagen del perfil fue actualizada'],
      }),
    );
  };

  getPropertyImages = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const result = await this.uploadsModel.getPropertyImages({ id });

    if (result.length === 0)
      return res
        .status(404)
        .json(sendObject({ message: ['El inmueble no tiene imágenes'] }));

    const imageList = result.map((item) => item.imgUrl);

    return res.json(
      sendObject({ data: imageList, message: ['Petición aceptada'] }),
    );
  };

  postPropertyImages = async (req, res) => {
    const { id } = req.params;
    const { images } = req.body;

    if (images.length === 0 || !id)
      return res
        .status(500)
        .json(
          sendObject({ error: ['Ocurrió un error en la subida de archivos'] }),
        );

    for await (const fileName of images) {
      const result = await this.uploadsModel.postPropertyImages({
        id,
        fileName,
      });
      if (!result)
        return res.status(500).json(
          sendObject({
            error: ['Ocurrió un error en la subida de archivos'],
          }),
        );
    }

    return res.status(201).json(
      sendObject({
        data: images,
        message: ['Imágenes guardadas'],
      }),
    );
  };

  deletePropertyImages = async (req, res) => {
    const { id } = req.params;
    const { fileName } = req.body;

    if (!id || !fileName || typeof fileName !== 'string')
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const result = await this.uploadsModel.deletePropertyImages({
      id,
      fileName,
    });

    if (!result)
      return res
        .status(400)
        .json(
          sendObject({ error: ['La imagen no existe o no se pudo eliminar'] }),
        );

    fs.unlink(path.join('public/images/', fileName), (err) => {
      if (err) console.error(`${fileName} no se pudo borrar. ${err}`);
    });

    return res.json(
      sendObject({ message: ['Imagen eliminada correctamente'] }),
    );
  };
}
