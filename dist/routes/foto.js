"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _Foto = require('../controllers/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

var _userRequired = require('../middlewares/userRequired'); var _userRequired2 = _interopRequireDefault(_userRequired);

const router = new (0, _express.Router)();

router.post('/', _userRequired2.default, _Foto2.default.store);

exports. default = router;
