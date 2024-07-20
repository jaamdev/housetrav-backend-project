import connection from '#Config/db.js';

export default class UploadsModel {
  static getPropertyImages = async ({ id }) => {
    try {
      const [result] = await connection.query(
        'SELECT img_url AS imgUrl FROM properties_images WHERE property_id = UUID_TO_BIN(?);',
        [id],
      );
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static postPropertyImages = async ({ id, fileName }) => {
    try {
      const [result] = await connection.query(
        'INSERT INTO properties_images (property_id, img_url) VALUES (UUID_TO_BIN(?), ?);',
        [id, fileName],
      );
      if (result.affectedRows === 0) return false;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  static deletePropertyImages = async ({ id, fileName }) => {
    try {
      const [result] = await connection.query(
        'DELETE FROM properties_images WHERE property_id = UUID_TO_BIN(?) AND img_url = ?;',
        [id, fileName],
      );
      if (result.affectedRows === 0) return false;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
