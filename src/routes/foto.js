import { Router } from 'express';

import FotoController from '../controllers/Foto';

import userRequired from '../middlewares/userRequired';

const router = new Router();

router.post('/', userRequired, FotoController.store);

export default router;
