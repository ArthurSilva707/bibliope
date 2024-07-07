import Book from "../../models/book";
import Loan from "../../models/loan";
import User from "../../models/user";
import sequelize from "../database";


const seed = async () => {
  try {
    await sequelize.sync({ force: true }); 

    await User.bulkCreate([
      { name: 'Carlos Silva', email: 'carlos.silva@example.com' },
      { name: 'Ana Souza', email: 'ana.souza@example.com' },
      { name: 'Bruno Oliveira', email: 'bruno.oliveira@example.com' },
      { name: 'Mariana Costa', email: 'mariana.costa@example.com' },
      { name: 'Fernanda Lima', email: 'fernanda.lima@example.com' },
    ]);

    await Book.bulkCreate([
      { title: 'Dom Casmurro', author: 'Machado de Assis', isbn: '9781234567897', year: 1899, genre: 'Romance', availableQuantity: 10 },
      { title: 'O Alquimista', author: 'Paulo Coelho', isbn: '9789876543210', year: 1988, genre: 'Ficção', availableQuantity: 15 },
      { title: 'Capitães da Areia', author: 'Jorge Amado', isbn: '9781112131415', year: 1937, genre: 'Drama', availableQuantity: 12 },
      { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', isbn: '9780987654321', year: 1881, genre: 'Ficção', availableQuantity: 8 },
      { title: 'A Moreninha', author: 'Joaquim Manuel de Macedo', isbn: '9781122334455', year: 1844, genre: 'Romance', availableQuantity: 20 },
    ]);


    await Loan.bulkCreate([
      { userId: 1, bookId: 1, loanDate: new Date('2024-01-01'), returnDate: new Date('2024-01-15') },
      { userId: 2, bookId: 2, loanDate: new Date('2024-01-05'), returnDate: new Date('2024-01-20') },
    ]);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error while seeding:', error);
  } finally {
    await sequelize.close();
  }
};

seed();
