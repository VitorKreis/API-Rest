import Aluno from '../models/Aluno';

class Home {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Vitor',
      sobrenome: 'Richter',
      email: 'teste.teste@teste.com',
      idade: 19,
      serie: '3-a',
      nota: 7.7,
    });
    res.json({ novoAluno });
  }
}

export default new Home();
