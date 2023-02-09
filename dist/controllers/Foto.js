"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

const upload = _multer2.default.call(void 0, _multer4.default).single('foto');

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
        const foto = await _Foto2.default.create({
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

exports. default = new Foto();
