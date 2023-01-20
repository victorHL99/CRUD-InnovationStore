# CRUD-InnovationStore

## O que é??

O projeto foi criado para um desafio técnico como um CRUD para a listagem, cadastro, atualização e remoção de produtos. Foi feito também um consumo da API do IBGE para listagem de municípios do estado do Rio de Janeiro. Foi feito utilizando NodeJs, Typescript, PostgreSQL, PrismaORM.

## Quais tecnologias foram utilizadas??

<p>
  <img alt="TypeScript" src="https://img.shields.io/static/v1?message=TypeScript&logo=TypeScript&labelColor=3178C6&color=3178C6&logoColor=white&label=%20&style=for-the-badge"> <img alt="Node.js" src="https://img.shields.io/static/v1?message=Node.js&logo=Node.js&labelColor=339933&color=339933&logoColor=white&label=%20&style=for-the-badge"> <img alt="Express" src="https://img.shields.io/static/v1?message=Express&logo=Express&labelColor=000000&color=000000&logoColor=white&label=%20&style=for-the-badge"> <img alt="Prisma" src="https://img.shields.io/static/v1?message=Prisma&logo=Prisma&labelColor=2D3748&color=2D3748&logoColor=white&label=%20&style=for-the-badge"> <img alt="PostgreSQL" src="https://img.shields.io/static/v1?message=PostgreSQL&logo=PostgreSQL&labelColor=4169E1&color=4169E1&logoColor=white&label=%20&style=for-the-badge"> 
</p>

## Instalação

Primeiro faça a instalação das dependências do projeto, utilizando o comando:

```bash
npm install
```

É necessário fazer a instalação do postgreSQL para rodar o banco de dados!!!

Caso já tenha instalado rode o comando:

```bash
npm run start:postgree
```

Em seguida, é necessário fazer a migração das tabelas do banco de dados com o seguinte comando:

```bash
npm run generate:database
```

É necessário que rode o seed também pelo comando:

```bash
npm run seed:database
```

Se tudo correu bem, é somente necessário rodar o seguinte comando para iniciar a aplicação:

```bash
npm run start:dev
```

## Routes

### POST

```bash
POST /products/
    - Rota para a criação de um produto
    - Headers: {}
    - body : {
        "name":"Max-Steel",
        "category": "Action Figure",
        "status": "ACTIVE" | "INACTIVE",
        "quantity": 10
      }
```

### GET

```bash
GET /products/
    - Rota para a leitura de todos os produtos
    - Headers: {}
    - body : {}
```

### PUT

```bash
PUT /products/:id
    - Rota para atualizar o produto escolhido
    - Headers: {}
    - body : {
        "name":"Barbie",
        "category": "Toy Figure",
        "status": "ACTIVE" | "INACTIVE",
        "quantity": 20
      }
```

### DELETE

```bash
DELETE /products/:id
    - Rota para deletar o produto escolhido
    - Headers: {}
    - body : {}
```

## Como observar os dados

Uma das funcionalidades do prisma, é poder observar o banco de dados em forma de página na web, para isso é necessário somente que rode o comando seguinte:

```bash
npm run prisma studio
```
