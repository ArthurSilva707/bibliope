import { Router } from 'express';
import { createLoan, getLoans, returnLoan } from '../controllers/loanController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Loans
 *   description: Loan management
 */


/**
 * @swagger
 * /api/loans:
 *   get:
 *     summary: Retrieve a list of loans
 *     tags: [Loans]
 *     responses:
 *       200:
 *         description: A list of loans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   userId:
 *                     type: integer
 *                   bookId:
 *                     type: integer
 *                   loanDate:
 *                     type: string
 *                     format: date-time
 *                   returnDate:
 *                     type: string
 *                     format: date-time
 *                   user:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                   book:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       author:
 *                         type: string
 *                       isbn:
 *                         type: string
 */
router.get('/', getLoans);

/**
 * @swagger
 * /api/loans:
 *   post:
 *     summary: Create a new loan
 *     tags: [Loans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               bookId:
 *                 type: integer
 *               loanDate:
 *                 type: string
 *                 format: date-time
 *               returnDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Loan created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 userId:
 *                   type: integer
 *                 bookId:
 *                   type: integer
 *                 loanDate:
 *                   type: string
 *                   format: date-time
 *                 returnDate:
 *                   type: string
 *                   format: date-time
 *       409:
 *         description: User already has an active loan for this book
 *       400:
 *         description: Book not available
 *       500:
 *         description: Internal Server Error
 */
router.post('/', createLoan);



/**
 * @swagger
 * /api/loans/{id}/return:
 *   put:
 *     summary: Return a loan by ID
 *     tags: [Loans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the loan to return
 *     responses:
 *       200:
 *         description: Book returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Loan not found
 *       500:
 *         description: Internal Server Error
 */
router.put('/:id/return', returnLoan);




export default router;



