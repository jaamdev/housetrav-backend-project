import { createConnection } from 'mysql2/promise';

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  typeCast: (field, next) => {
    if (field.type === 'TINY' && field.length === 1) {
      return field.string() === '1';
    }
    return next();
  },
};

const connection = await createConnection(config).catch(() =>
  console.error('DB connection error'),
);

export default connection;
