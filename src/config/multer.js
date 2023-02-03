import multer from 'multer';
import { extname, resolve } from 'path';

const ran = () => Math.floor(Math.random() * 1000 + 1000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('È necessario que o arquivo seja JPG ou PNG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'upload', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${ran()}${extname(file.originalname)}`);
    },
  }),
};
