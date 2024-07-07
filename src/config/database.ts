import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('biblioteca', 'postgres', 'teste', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export default sequelize;
