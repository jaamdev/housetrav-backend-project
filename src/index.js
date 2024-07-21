import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import express from 'express';
import cookieParser from 'cookie-parser';
import corsMiddleware from '#Middlewares/cors.js';
import createRouteMod from '#Routes/mod.js';
import createRouteUsers from '#Routes/users.js';
import createRoutePortal from '#Routes/portal.js';
import createRouteUploads from '#Routes/uploads.js';
import createRouteProperties from '#Routes/properties.js';

const PORT = process.env.PORT ?? 4000;
const FRONT = process.env.FRONT ?? 'http://localhost:5173';
const server = express();

server.disable('x-powered-by');
server.use(express.json());
server.use(cookieParser());
server.use(corsMiddleware());
server.use(express.static('public'));
server.use('/mod', createRouteMod());
server.use('/user', createRouteUsers());
server.use('/portal', createRoutePortal());
server.use('/upload', createRouteUploads());
server.use('/properties', createRouteProperties());
server.all('*', (_, res) => res.redirect(FRONT));

// Función temporal para eliminar la carpeta de imágenes temporales
const removeTmp = () => {
  const pathDirectory = 'src/tmp';

  fs.readdir(pathDirectory, (err, files) => {
    if (err) return console.log('No se pudo leer la carpeta TMP');

    if (files.length === 0) return;

    files.forEach((file) =>
      fs.unlink(path.join(pathDirectory, file), (err) => {
        if (err) console.log(`El archivo ${file} no se pudo eliminar`, err);
      }),
    );
  });
};

removeTmp();

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
