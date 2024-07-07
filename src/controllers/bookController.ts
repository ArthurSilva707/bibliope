import { Request, Response } from 'express';
import Book from '../models/book';

// Cadastrar Livro
export const createBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, author, isbn, year, genre, availableQuantity } = req.body;
    const book = await Book.create({ title, author, isbn, year, genre, availableQuantity });
    return res.status(201).json(book);
  } catch (error) {
       if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
  
};

// Consultar Livro
export const getBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
       if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
  
};

// Atualizar Livro
export const updateBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { title, author, isbn, year, genre, availableQuantity } = req.body;
    const [updated] = await Book.update({ title, author, isbn, year, genre, availableQuantity }, { where: { id } });
    if (updated) {
      const updatedBook = await Book.findOne({ where: { id } });
      return res.status(200).json(updatedBook);
    }
    throw new Error('Book not found');
  } catch (error) {
       if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Excluir Livro
export const deleteBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deleted = await Book.destroy({ where: { id } });
    if (deleted) {
      return res.status(204).send("Book deleted");
    }
    throw new Error('Book not found');
  } catch (error) {
       if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
};
