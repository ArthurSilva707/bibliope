import { Router } from 'express';
import { createBook, getBooks, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

router.post('/', createBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;