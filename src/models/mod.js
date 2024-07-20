import connection from '#Config/db.js';

export default class ModModel {
  static async checkMod({ id }) {
    try {
      const [isMod] = await connection.query(
        'SELECT moderator FROM users WHERE id = UUID_TO_BIN(?);',
        [id],
      );
      if (isMod.length === 0) return false;
      return isMod[0].moderator;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async getUsers() {
    try {
      const [users] = await connection.query(
        'SELECT BIN_TO_UUID(id) AS id, first_name AS firstName, last_name AS lastName, email, moderator, created_at FROM users ORDER BY created_at DESC LIMIT 20;',
      );
      if (users.length === 0) return [];
      return users;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async changeMod({ value, id }) {
    try {
      const [result] = await connection.query(
        'UPDATE users SET moderator = ? WHERE id = UUID_TO_BIN(?);',
        [value, id],
      );
      if (result.affectedRows === 0) return false;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
