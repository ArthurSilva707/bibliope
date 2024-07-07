import { Router } from 'express';
import bookRoutes from './bookRoutes';
import userRoutes from './userRoutes';
import loanRoutes from './loanRoutes';

const router = Router();

router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/loans', loanRoutes);

export default router;
