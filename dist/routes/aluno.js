"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Aluno = require('../controllers/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _userRequired = require('../middlewares/userRequired'); var _userRequired2 = _interopRequireDefault(_userRequired);

const router = new (0, _express.Router)();

router.get('/', _Aluno2.default.index);// Mostra todos os alunos
router.get('/:id', _Aluno2.default.show); // Mostra um aluno

router.post('/', _Aluno2.default.store); // Cria uma aluno
router.put('/:id', _userRequired2.default, _Aluno2.default.update); // Modifica um aluno
router.delete('/:id', _userRequired2.default, _Aluno2.default.delete); // Deleta um aluno

exports. default = router;
