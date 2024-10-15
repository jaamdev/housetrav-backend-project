import { sendObject, verifyToken } from '#Utils/utils.js';

export default async function verifyUser(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    res.clearCookie('token');
    return res
      .status(401)
      .json(sendObject({ error: ['No autorizado'], status: 401 }));
  }

  const isValid = await verifyToken(token);

  if (!isValid) {
    res.clearCookie('token');
    return res
      .status(401)
      .json(sendObject({ error: ['No autorizado'], status: 401 }));
  }

  req.user = { id: isValid };

  return next();
}
