import Sequelize, { Model } from 'sequelize';
import appConfg from '../config/appConfg';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Este campo nao pode ser null',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          notEmpty: {
            msg: 'Este campo nao pode ser null',
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfg.url}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'foto',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
