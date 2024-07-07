import { Request, Response } from 'express';
import User from '../models/user';

// Cadastrar Usuário
export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    return res.status(201).json(user);
  } catch (error) {
           if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Consultar Usuários
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
           if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Atualizar Usuário
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const [updated] = await User.update({ name, email }, { where: { id } });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id } });
      return res.status(200).json(updatedUser);
    }
    throw new Error('User not found');
  } catch (error) {
           if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Excluir Usuário
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      return res.status(204).send("User deleted");
    }
    throw new Error('User not found');
  } catch (error) {
           if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
    } 
        return res.status(500).json({ error: 'Internal Server Error' });
  }
};
