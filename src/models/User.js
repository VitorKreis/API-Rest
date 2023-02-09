import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'È necessario que insira seu nome',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail ja cadastrado',
        },
        validator: {
          notEmpty: {
            msg: 'E-mail necessario!',
          },
          isEmail: {
            msg: 'E-mail invalido!',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validator: {
          notEmpty: {
            msg: 'Senha necessaria!',
          },
          len: {
            arg: [5, 50],
            msg: 'È necessario que sua senha tenha entre 5 a 50 caracteres!',
          },
        },
      },
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
