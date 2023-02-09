class Home {
  async index(req, res) {
    res.send('Ola, coloque seu home aqui:');
  }
}

export default new Home();
