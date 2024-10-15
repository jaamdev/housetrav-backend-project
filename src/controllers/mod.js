import { sendObject } from '#Utils/utils.js';

export default class ModController {
  constructor({ modModel }) {
    this.modModel = modModel;
  }

  getUsers = async (req, res) => {
    const { id } = req.user;

    if (!id) return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const isMod = await this.modModel.checkMod({ id });
    if (!isMod)
      return res.status(401).json(sendObject({ error: ['No autorizado'] }));

    const result = await this.modModel.getUsers();

    if (result.length === 0)
      return res.json(sendObject({ error: ['No hay usuarios'] }));

    return res.json(
      sendObject({ data: result, message: ['Petición aceptada'] }),
    );
  };

  changeMod = async (req, res) => {
    const { id } = req.user;
    const { value, userId } = req.body;

    if (!id || value === undefined || userId === undefined)
      return res.status(400).json(sendObject({ error: ['No hay ID'] }));

    const isMod = await this.modModel.checkMod({ id });
    if (!isMod)
      return res.status(401).json(sendObject({ error: ['No autorizado'] }));

    const result = await this.modModel.changeMod({ value, id: userId });

    if (!result)
      return res.json(
        sendObject({ error: ['No se pudo hacer mod al usuario'] }),
      );

    return res.json(sendObject({ message: ['El usuario ahora es mod'] }));
  };
}
