import connection from '#Config/db.js';

export default class UsersModel {
  static async checkEmail({ input }) {
    const { email } = input;

    const [userExist] = await connection.query(
      'SELECT email FROM users WHERE email = ?',
      [email],
    );

    if (userExist.length === 0) return false;

    return true;
  }

  static async profile({ input }) {
    const [profile] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, first_name AS firstName, last_name AS lastName, address, city, country, postal, phone, email, moderator FROM users WHERE id = UUID_TO_BIN(?)',
      [input],
    );

    if (profile.length === 0) return false;

    return profile;
  }

  static async removeProfile({ input }) {
    try {
      const [properties] = await connection.query(
        'SELECT BIN_TO_UUID(id) AS id FROM properties WHERE user_id = UUID_TO_BIN(?);',
        [input],
      );
      let images = [];
      if (properties.length !== 0) {
        for await (const { id } of properties) {
          const [fileNames] = await connection.query(
            'SELECT img_url AS imgUrl FROM properties_images WHERE property_id = UUID_TO_BIN(?);',
            [id],
          );
          if (fileNames.length !== 0) {
            const result = fileNames.map((item) => item.imgUrl);
            images = images.concat(result);
          }
          await connection.query(
            'DELETE FROM properties_images WHERE property_id = UUID_TO_BIN(?);',
            [id],
          );
        }
      }
      if (properties.length !== 0) {
        await connection.query(
          'DELETE FROM properties WHERE user_id = UUID_TO_BIN(?);',
          [input],
        );
      }
      const [profile] = await connection.query(
        'DELETE FROM users WHERE id = UUID_TO_BIN(?);',
        [input],
      );
      if (profile.affectedRows === 0) return { result: false };
      else return { result: true, images };
    } catch (error) {
      console.error(error);
      return { result: false };
    }
  }

  static async login({ input }) {
    const { email } = input;

    const [userExist] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, first_name AS firstName, last_name AS lastName, address, city, country, postal, phone, email, moderator, password FROM users WHERE email = ?',
      [email],
    );

    if (userExist.length === 0) return false;

    return userExist;
  }

  static async register({ input }) {
    const {
      firstName,
      lastName,
      address,
      city,
      country,
      postal,
      phone,
      email,
      password,
    } = input;

    const [uuidResult] = await connection.query('SELECT UUID() uuid;');
    const [{ uuid }] = uuidResult;

    try {
      await connection.query(
        `INSERT INTO users (id, first_name, last_name, address, city, country, postal, phone, email, password) VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          firstName,
          lastName,
          address,
          city,
          country,
          postal,
          phone,
          email,
          password,
        ],
      );
    } catch (error) {
      console.error(error);
    }

    const [newUser] = await connection.query(
      'SELECT BIN_TO_UUID(id) id, first_name AS firstName, last_name AS lastName, address, city, country, postal, phone, email, moderator FROM users WHERE id = UUID_TO_BIN(?);',
      [uuid],
    );

    return newUser;
  }
}
