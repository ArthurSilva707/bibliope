import { Router } from 'express';
import { createLoan, returnLoan } from '../controllers/loanController';

const router = Router();

router.post('/', createLoan);
router.put('/:id/return', returnLoan);

export default router;
