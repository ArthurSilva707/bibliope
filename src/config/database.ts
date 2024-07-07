import { Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const sequelizeOptions = {
  database: process.env.DB_NAME || 'biblioteca',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres' as Dialect,
  logging: false,
};

const sequelize = new Sequelize(sequelizeOptions.database, sequelizeOptions.username, sequelizeOptions.password, {
  host: sequelizeOptions.host,
  dialect: sequelizeOptions.dialect,
  logging: sequelizeOptions.logging,
});
export default sequelize;



