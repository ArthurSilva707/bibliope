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
git clone https://github.com/ArthurSilva707/bibliope
cd bibliope
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
│   ├── seeders/
│   │   └── seed.ts
│   └── database.ts
│
└── app.ts
└── server.ts
```

## Endpoints da API

### Livros

- `GET /api/books`: Listar todos os livros ou buscar por título/autor/ISBN.
- `POST /api/books`: Cadastrar um novo livro.
- `PUT /api/books/:id`: Atualizar informações de um livro.
- `DELETE /api/books/:id`: Excluir um livro (se não houver empréstimos ativos).

### Empréstimos

- `POST /api/apiloans`: Registrar um novo empréstimo de livro.
- `PUT /api/loans/:id/return`: Registrar a devolução de um livro.
- `GET /api/loans`: Obter todos os empréstimos com informações de usuários e livros correspondentes.

### Usuários

- `POST /api/users`: Registrar um novo usuário.
- `PUT /api/users/:id/return`: Atualizar um usuário basedo no seu identificador.
- `GET /api/users`: Obter todos os usuários cadastrados na base de dados.

