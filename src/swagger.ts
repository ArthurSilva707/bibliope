import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Aplicação contendo documentação do backend do BiblioPE', 
      version: '1.0.0',
      description: 'Documentação da API para uma aplicação Node.js com TypeScript e Sequelize.', 
    },
  },
  apis: ['./src/routes/*.ts'], 
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
