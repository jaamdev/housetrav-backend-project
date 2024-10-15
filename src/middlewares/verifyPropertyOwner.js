import connection from '#Config/db.js';
import { sendObject } from '#Utils/utils.js';
import validateSchema from '#Utils/validateSchema.js';
import { checkIdAndUserIdSchema } from '#Schemas/property.js';

const getPropertyId = async ({ id }) => {
  try {
    const [result] = await connection.query(
      'SELECT BIN_TO_UUID(id) as id, BIN_TO_UUID(user_id) as userId FROM properties WHERE id = UUID_TO_BIN(?);',
      [id],
    );
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const verifyPropertyOwner = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (!id || !userId)
    return res.status(400).json(sendObject({ error: ['No hay ID'] }));

  const validate = validateSchema(checkIdAndUserIdSchema, { id, userId });
  if (!validate.success) {
    const issues = validate.issues.map((e) => e.message);
    return res.status(400).json(sendObject({ error: issues }));
  }

  const result = await getPropertyId({ id });

  if (result.length === 0)
    return res
      .status(404)
      .json(sendObject({ status: 404, error: ['El inmueble no existe'] }));

  if (result[0].userId !== userId)
    return res
      .status(403)
      .json(sendObject({ status: 403, error: ['No autorizado'] }));

  return next();
};

export default verifyPropertyOwner;
