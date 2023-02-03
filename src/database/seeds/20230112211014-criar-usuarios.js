const { hash } = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Pedro Feliz',
          email: 'pedro.feliz@gmail.com',
          password_hash: await hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Pedro Triste',
          email: 'pedro.triste@gmail.com',
          password_hash: await hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Pedro Neutro',
          email: 'pedro.neutro@gmail.com',
          password_hash: await hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
    );
  },

  down: () => {},
};
