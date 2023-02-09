"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    const aluno = await _Aluno2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'serie', 'nota'],
      order: [['id', 'DESC']],
      include: {
        model: _Foto2.default,
        attributes: ['url', 'id', 'filename'],
        order: [['id', 'DESC']],
      },
    });
    res.json({ aluno });
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      if (!aluno) {
        return res.status(400).json('Algo deu errado, verifique os campos obrigatorios');
      }
      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json('O id e invalido!');
      }

      const aluno = await _Aluno2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'serie', 'nota'],
        order: [['id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['url', 'id', 'filename'],
          order: [['id', 'DESC']],
        },
      });

      if (!aluno) {
        return res.status(400).json('Aluno nao existe');
      }

      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      console.log(req.body);
      const { id } = req.params;
      if (!id) {
        return res.status(400).json('O id e invalido!');
      }
      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json('Aluno nao existe');
      }
      const AlunoUpdate = await aluno.update(req.body);

      return res.json(AlunoUpdate);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json('O id e invalido!');
      }
      const aluno = await _Aluno2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json('Aluno nao existe');
      }

      await aluno.destroy();

      return res.json('Aluno deletado com sucesso!');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
