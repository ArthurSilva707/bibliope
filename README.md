# Biblioteca de Empréstimos

Este é um sistema de gerenciamento de biblioteca para cadastrar, consultar, atualizar, excluir e registrar empréstimos de livros, utilizando Node.js, Express, Sequelize, PostgreSQL e TypeScript.

## Funcionalidades

- Cadastrar livros
- Consultar livros
- Atualizar informações dos livros
- Excluir livros (se não houver empréstimos ativos)
- Registrar empréstimos de livros
- Registrar devoluções de livros
- Consultar todos os empréstimos com informações de usuários e livros correspondentes

## Pré-requisitos

- Node.js
- PostgreSQL

## Configuração do Ambiente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados PostgreSQL e crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sua_base_de_dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

4. Execute as migrações do banco de dados:

```bash
npx sequelize-cli db:migrate
```

## Executando o Projeto

Para iniciar o servidor, use o comando:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```plaintext
src/
│
├── controllers/
│   ├── bookController.ts
│   ├── loanController.ts
│   └── userController.ts
│
├── models/
│   ├── book.ts
│   ├── loan.ts
│   └── user.ts
│
├── routes/
│   ├── bookRoutes.ts
│   ├── loanRoutes.ts
│   ├── userRoutes.ts
│   └── index.ts
│
├── config/
│   └── database.ts
│
├── migrations/
│   └── criar_migracoes_necessarias.ts
│
├── seeders/
│   └── criar_seeders_necessarios.ts
│
└── app.ts
└── server.ts
```

## Endpoints da API

### Livros

- `GET /books`: Listar todos os livros ou buscar por título/autor/ISBN.
- `POST /books`: Cadastrar um novo livro.
- `PUT /books/:id`: Atualizar informações de um livro.
- `DELETE /books/:id`: Excluir um livro (se não houver empréstimos ativos).

### Empréstimos

- `POST /loans`: Registrar um novo empréstimo de livro.
- `PUT /loans/:id/return`: Registrar a devolução de um livro.
- `GET /loans`: Obter todos os empréstimos com informações de usuários e livros correspondentes.

