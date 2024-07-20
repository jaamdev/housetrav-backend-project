import { createConnection } from 'mysql2/promise';

const config = {
  uri: process.env.DB_URI,
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
