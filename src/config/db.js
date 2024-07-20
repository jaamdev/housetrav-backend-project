import { createConnection } from 'mysql2/promise';

const config = {
  host: 'localhost',
  port: '3306',
  database: 'housetrav',
  user: 'root',
  password: process.env.DB_PWD ?? undefined,
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
