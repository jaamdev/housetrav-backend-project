import path from 'node:path';
import multer from 'multer';
import sharp from 'sharp';
import { sendObject } from '#Utils/utils.js';

const formatFile = (filePath, fileName, size) => {
  return sharp(filePath)
    .resize(size)
    .webp({ lossless: true })
    .toFile(`public/avatars/${fileName}`);
};

const upload = multer({
  storage: multer.diskStorage({
    destination: 'src/tmp/',
    filename: (req, file, callback) => {
      if (!file) {
        req.isValidFile = 'Error en la subida del archivo';
        return callback(null, false);
      }
      const uniqueSuffix = req.user.id;
      const ext = path.extname(file.originalname);
      callback(null, 'raw-' + uniqueSuffix + ext);
    },
  }),
  limits: { files: 1, fileSize: 1024 * 1024 * 3 },
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
}).single('file');

export default function uploadAvatar(req, res, next) {
  return upload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      console.log('Multer error:', err);
      if (err.code === 'LIMIT_FILE_COUNT')
        req.isValidFile = 'Máximo una sola imagen';
      if (err.code === 'LIMIT_FILE_SIZE')
        req.isValidFile = 'Imagen demasiado grande. Máximo 3MB.';
    } else if (err) {
      console.log('No multer error:', err);
    }

    if (req.isValidFile)
      return res.status(400).json(sendObject({ error: [req.isValidFile] }));

    if (!req.file?.filename)
      return res.json(
        sendObject({
          error: [
            'La imagen del perfil no fue actualizada, inténtelo de nuevo por favor.',
          ],
        }),
      );

    const avatar =
      req.file.filename.split('raw-').pop().split('.').shift() + '.webp';

    try {
      if (!req.file) throw new Error('El archivo no existe');
      await formatFile(req.file.path, avatar, 250);
    } catch (error) {
      console.error(error);
    }

    return next();
  });
}
