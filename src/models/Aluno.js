import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [1, 255],
            },
            notEmpty: {

              msg: 'Seu nome é necessario ter 1 a 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [1, 255],
            },
            notEmpty: {

              msg: 'Seu sobrenome é necessario ter 1 a 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'E-mail invalido!',
            },
            notEmpty: {
              msg: 'E-mail necessario!',
            },
          },
          unique: {
            msg: 'O email ja esta cadastrado',
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Um numero deve ser informado!',
            },
            notEmpty: {
              msg: 'Sua idade deve ser informada!',
            },
          },
        },
        serie: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [1, 100],
            },
            notEmpty: {
              msg: 'Sua serie e turma deve ser informada!',
            },
          },
        },
        nota: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Uma nota valida deve ser informada!',
            },
            notEmpty: {

              msg: 'È necessario que coloque a nota',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
