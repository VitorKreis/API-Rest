import { Router } from 'express';
import UserController from '../controllers/User';

// Middlewars
import userRequired from '../middlewares/userRequired';

const router = new Router();

// Nao é necesario
router.get('/', UserController.index); // Lista todos os usuarios
router.get('/', userRequired, UserController.show); // Lista um usuario

// Muito necessario
router.post('/', UserController.store);// Cria usuario
router.put('/', userRequired, UserController.update);// Modifica usuario
router.delete('/', userRequired, UserController.delete);// Deleta usuario

export default router;
