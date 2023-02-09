import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'serie', 'nota'],
      order: [['id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'id', 'filename'],
        order: [['id', 'DESC']],
      },
    });
    res.json({ aluno });
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
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

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'serie', 'nota'],
        order: [['id', 'DESC']],
        include: {
          model: Foto,
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
      const aluno = await Aluno.findByPk(id);

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
      const aluno = await Aluno.findByPk(id);

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

export default new AlunoController();
