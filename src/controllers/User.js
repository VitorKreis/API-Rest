import User from '../models/User';

class UserController {
  // Store
  // Utilizado para criar usuarios
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  // Index
  // Utilizado para mostar todos os usuarios
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(404).json(null);
    }
  }

  // Show
  // Utilizado para mostrar um unico usario
  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(404).json(null);
    }
  }

  // Update
  // Utilizado para mudar informaçoes de usarios
  async update(req, res) {
    try {
      if (!req.userID) {
        return res.status(400).json({
          Errros: [
            'Id Invalido',
          ],
        });
      }
      const user = await User.findByPk(req.userID);
      if (!user) {
        return res.status(400).json(null);
      }
      const userEdit = await user.update(req.body);
      const { id, nome, email } = userEdit;
      return res.json({
        id,
        nome,
        email,
      });
    } catch (error) {
      console.log(error);
      return res.status('400').json({ errors: ['Algo deu errado'] });
    }
  }

  // Delete
  // Utilizado para deletar usuarios
  async delete(req, res) {
    try {
      if (!req.userID) {
        return req.status(400).json('Bad Request');
      }

      const user = await User.findByPk(req.userID);

      if (!user) {
        return req.status(400).json('User Invalid!');
      }

      await user.destroy();

      return res.json('Usuario deletado com sucesso');
    } catch (error) {
      return req.status(400).json(null);
    }
  }
}

export default new UserController();
