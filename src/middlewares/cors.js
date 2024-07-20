import cors from 'cors';

export default function corsMiddleware() {
  return cors({
    origin: process.env.FRONT,
    credentials: true,
    methods: 'GET,POST,PATCH,DELETE',
  });
}
