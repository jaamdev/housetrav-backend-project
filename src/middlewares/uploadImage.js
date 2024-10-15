import path from 'node:path';
import multer from 'multer';
import sharp from 'sharp';
import { sendObject } from '#Utils/utils.js';

const formatFile = (filePath, fileName, size) => {
  return sharp(filePath)
    .resize(size)
    .webp({ lossless: true })
    .toFile(`public/images/${fileName}`);
};

const upload = multer({
  storage: multer.diskStorage({
    destination: 'src/tmp/',
    filename: (req, file, callback) => {
      if (!file) {
        req.isValidFile = 'Error en la subida del archivo';
        return callback(null, false);
      }
      callback(
        null,
        'raw-' +
          Date.now() +
          '-' +
          Math.round(Math.random() * 1e9) +
          path.extname(file.originalname),
      );
    },
  }),
  limits: { files: 30, fileSize: 1024 * 1024 * 3 },
  fileFilter: (req, file, callback) => {
    if (!file) {
      req.isValidFile = 'Error en la subida del archivo';
      return callback(null, false);
    }
    const fileType = /jpg|png|jpeg/;
    const mimeType = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return callback(null, true);
    }
    req.isValidFile = 'La imagen debe ser un JPG, JPEG o PNG';
    return callback(null, false);
  },
}).array('file');

export default function uploadImage(req, res, next) {
  return upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      console.log('Multer error:', err.code);
      if (err.code === 'LIMIT_FILE_COUNT')
        req.isValidFile = 'Solo 30 imágenes como máximo';
      if (err.code === 'LIMIT_FILE_SIZE')
        req.isValidFile = 'Imagen demasiado grande. Máximo 3MB.';
    } else if (err) {
      console.log('No multer error:', err);
    }

    if (req.isValidFile)
      return res.status(400).json(sendObject({ error: [req.isValidFile] }));

    if (!req.params.id) return res.json(sendObject({ error: ['Falta el ID'] }));

    if (req.files?.length === 0)
      return res.json(
        sendObject({ error: ['Ocurrió un problema con los archivos'] }),
      );

    const imageNames = [];
    for (let i = 0; i < req.files.length; ++i) {
      imageNames.push(
        req.params.id +
          '_' +
          Date.now() +
          '_' +
          Math.round(Math.random() * 1e9) +
          '.webp',
      );
    }

    req.files.forEach(async (file, idx) => {
      const images = imageNames[idx];
      try {
        await formatFile(file.path, images, 1200);
      } catch (error) {
        console.error(error);
      }
    });

    req.body.images = imageNames;
    return next();
  });
}
