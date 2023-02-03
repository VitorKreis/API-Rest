import multer from 'multer';
import MulterConfg from '../config/multer';

import FotoModel from '../models/Foto';

const upload = multer(MulterConfg).single('foto');

class Foto {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          err: [err.code],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await FotoModel.create({
          originalname, filename, aluno_id,
        });

        return res.json(foto);
      } catch (error) {
        return res.status(401).json({
          error: ['Aluno nao existe'],
        });
      }
    });
  }
}

export default new Foto();
