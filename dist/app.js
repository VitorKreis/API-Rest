"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _tokens = require('./routes/tokens'); var _tokens2 = _interopRequireDefault(_tokens);
var _aluno = require('./routes/aluno'); var _aluno2 = _interopRequireDefault(_aluno);
var _foto = require('./routes/foto'); var _foto2 = _interopRequireDefault(_foto);

// eslint-disable-next-line no-unused-vars
var _Connection = require('./database/Connection'); var _Connection2 = _interopRequireDefault(_Connection);

/*
const WhiteList = [
  'http://localhost3001',
  'http://Vitorkreis',
];
Lista de sites
*/

/*
const CosrsOption = {
  origin(origin, callback) {
    if (WhiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allow by CORS'));
    }
  },
};
Configurando a lista de sites que podem ter acesso a sua url
*/

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'upload')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users/', _user2.default);
    this.app.use('/tokens/', _tokens2.default);
    this.app.use('/alunos/', _aluno2.default);
    this.app.use('/foto/', _foto2.default);
  }
}

exports. default = new App().app;
