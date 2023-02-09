import { Router } from 'express';
import AlunoController from '../controllers/Aluno';
import userRequired from '../middlewares/userRequired';

const router = new Router();

router.get('/', AlunoController.index);// Mostra todos os alunos
router.get('/:id', AlunoController.show); // Mostra um aluno

router.post('/', AlunoController.store); // Cria uma aluno
router.put('/:id', userRequired, AlunoController.update); // Modifica um aluno
router.delete('/:id', userRequired, AlunoController.delete); // Deleta um aluno

export default router;
