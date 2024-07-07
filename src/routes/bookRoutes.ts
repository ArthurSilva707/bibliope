import { Router } from 'express';
import { createBook, getBooks, updateBook, deleteBook } from '../controllers/bookController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management
 */


/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               isbn:
 *                 type: string
 *               year:
 *                 type: integer
 *               genre:
 *                 type: string
 *               availableQuantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 isbn:
 *                   type: string
 *                 year:
 *                   type: integer
 *                 genre:
 *                   type: string
 *                 availableQuantity:
 *                   type: integer
 *       500:
 *         description: Internal Server Error
 */
router.post('/', createBook);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve a list of books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   author:
 *                     type: string
 *                   isbn:
 *                     type: string
 *                   year:
 *                     type: integer
 *                   genre:
 *                     type: string
 *                   availableQuantity:
 *                     type: integer
 *       500:
 *         description: Internal Server Error
 */
router.get('/', getBooks);


/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               isbn:
 *                 type: string
 *               year:
 *                 type: integer
 *               genre:
 *                 type: string
 *               availableQuantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Book updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 author:
 *                   type: string
 *                 isbn:
 *                   type: string
 *                 year:
 *                   type: integer
 *                 genre:
 *                   type: string
 *                 availableQuantity:
 *                   type: integer
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id', updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the book to delete
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */
router.delete('/:id', deleteBook);

export default router;
