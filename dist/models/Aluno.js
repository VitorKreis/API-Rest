"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
