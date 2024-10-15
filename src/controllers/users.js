import fs from 'node:fs';
import path from 'node:path';
import {
  sendObject,
  hashPassword,
  hashCompare,
  createToken,
} from '#Utils/utils.js';
import validateSchema from '#Utils/validateSchema.js';
import { loginSchema, registerSchema } from '#Schemas/user.js';

export default class UsersController {
  constructor({ usersModel }) {
    this.usersModel = usersModel;
  }

  profile = async (req, res) => {
    const { id } = req.user;

    if (!id) {
      console.error('Falta el UUID del usuario');
      return res.status(401).json(sendObject({ error: ['No autorizado'] }));
    }

    const profile = await this.usersModel.profile({ input: id });

    if (!profile)
      return res
        .status(404)
        .json(sendObject({ error: ['El usuario no existe'] }));

    return res.json(sendObject({ data: profile, message: ['Usuario válido'] }));
  };

  removeProfile = async (req, res) => {
    const { id } = req.user;

    if (!id) {
      console.error('Falta el UUID del usuario');
      return res.status(401).json(sendObject({ error: ['No autorizado'] }));
    }

    const result = await this.usersModel.removeProfile({ input: id });

    if (!result.result) {
      return res
        .status(500)
        .json(sendObject({ error: ['No se pudo eliminar su cuenta'] }));
    }

    if (result?.images.length !== 0) {
      const fileNames = result.images;

      fileNames.forEach((url) => {
        fs.unlink(path.join('public/images/', url), (err) => {
          if (err) console.error(`${url} no se pudo borrar. ${err}`);
        });
      });
    }

    fs.unlink(path.join('public/avatars/', `${id}.webp`), (err) => {
      if (err) console.error(`${id}.webp no se pudo borrar. ${err}`);
    });

    res.clearCookie('token');
    return res.json(sendObject({ message: ['Su cuenta fue eliminada'] }));
  };

  login = async (req, res) => {
    const validate = validateSchema(loginSchema, req.body);

    if (!validate.success) {
      const issues = validate.issues.map((e) => e.message);
      return res.status(400).json(sendObject({ error: issues }));
    }

    const userExist = await this.usersModel.login({ input: validate.output });

    if (!userExist)
      return res.status(401).json(
        sendObject({
          error: ['Las credenciales son incorrectas'],
        }),
      );

    const isCorrect = await hashCompare(
      validate.output.password,
      userExist[0].password,
    );

    if (!isCorrect)
      return res.status(401).json(
        sendObject({
          error: ['Las credenciales son incorrectas'],
        }),
      );

    const token = await createToken(userExist[0].id);

    delete userExist[0].password;

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 10800000,
    });

    return res.json(
      sendObject({
        data: userExist,
        message: ['Has iniciado sesión correctamente'],
      }),
    );
  };

  register = async (req, res) => {
    const validate = validateSchema(registerSchema, req.body);

    if (!validate.success) {
      const issues = validate.issues.map((e) => e.message);
      return res.status(400).json(sendObject({ error: issues }));
    }

    const userExist = await this.usersModel.checkEmail({
      input: validate.output,
    });

    if (userExist)
      return res.status(409).json(
        sendObject({
          error: ['El correo electrónico ya está en uso'],
        }),
      );

    const passwordHashed = await hashPassword(validate.output.password);

    validate.output.password = passwordHashed;

    const newUser = await this.usersModel.register({
      input: validate.output,
    });

    const token = await createToken(newUser[0].id);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      maxAge: 10800000,
    });

    return res.status(201).json(
      sendObject({
        data: newUser,
        message: ['Su cuenta fue registrada'],
      }),
    );
  };
}
