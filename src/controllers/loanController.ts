import { Request, Response } from 'express';
import Loan from '../models/loan';
import User from '../models/user';
import Book from '../models/book';

// Registrar Empréstimo
export const createLoan = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, bookId, loanDate, returnDate } = req.body;

    // Verificar se já existe um empréstimo ativo para o mesmo livro e usuário
    const existingLoan = await Loan.findOne({ where: { userId, bookId } });
    if (existingLoan) {
      return res.status(409).json({ error: 'User already has an active loan for this book' });
    }

    const book = await Book.findOne({ where: { id: bookId } });
    if (book && book.availableQuantity > 0) {
      const loan = await Loan.create({ userId, bookId, loanDate, returnDate });
      await book.update({ availableQuantity: book.availableQuantity - 1 });
      return res.status(201).json(loan);
    }

    return res.status(400).json({ error: 'Book not available' });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Registrar Devolução
export const returnLoan = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const loan = await Loan.findOne({ where: { id } });
    if (loan) {
      const book = await Book.findOne({ where: { id: loan.bookId } });
      if (book) {
        await loan.destroy();
        await book.update({ availableQuantity: book.availableQuantity + 1 });
        return res.status(200).json({ message: 'Book returned successfully' });
      }
    }
    throw new Error('Loan not found');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Obter todos os Empréstimos com Usuário e Livro Correspondente
export const getLoans = async (req: Request, res: Response): Promise<Response> => {
  try {
    const loans = await Loan.findAll({
      include: [
        { model: User, attributes: ['id', 'name', 'email'] },
        { model: Book, attributes: ['id', 'title', 'author', 'isbn'] }
      ]
    });
    return res.status(200).json(loans);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
