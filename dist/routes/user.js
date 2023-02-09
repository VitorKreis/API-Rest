"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);

// Middlewars
var _userRequired = require('../middlewares/userRequired'); var _userRequired2 = _interopRequireDefault(_userRequired);

const router = new (0, _express.Router)();

// Nao é necesario
router.get('/', _User2.default.index); // Lista todos os usuarios
router.get('/', _userRequired2.default, _User2.default.show); // Lista um usuario

// Muito necessario
router.post('/', _User2.default.store);// Cria usuario
router.put('/', _userRequired2.default, _User2.default.update);// Modifica usuario
router.delete('/', _userRequired2.default, _User2.default.delete);// Deleta usuario

exports. default = router;
