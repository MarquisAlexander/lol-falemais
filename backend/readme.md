<h1 align="center"></h1>

<h2 align="center">
  🚀 V8-Backend
</h2>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-informações">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aplicação-online">Aplicação online</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documentação no Insomnia(Endpoints)">Documentação no Insomnia(Endpoints)</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como_rodar_o_projeto_local_e_testar">Como rodar o projeto local</a>
</p>

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Jest](https://jestjs.io/pt-BR/)
- [TypeORM](https://typeorm.io/)

## 💻 Projeto

- Essa **Aplicação** foi desenvolvida para disponibilizar para os clientes(frontend) uma forma perfomatica e eficas para mostrar para ajudar o usuário a escolher o melhor plano de ligação da Telzin,ajudando o usuário a ver as vantagem que ele tem ao contratar os planos de ligação da Telzin, mostrando para ele uma simples comparação de preços ao usar e não utilizar o plano para realizar chamadas.

## 📔 Documentação no Insomnia(Endpoints)

- Esse projeto conta com os seguintes endpoint:
  - `POST` **/calcpriceplan** - endpoint para calcular o preço de quanto você vai economizar caso você use algum plano de ligação da Telzin.
- Exite toda uma documentação completa no insomnia você consegue baixar ela [clicando aqui](), lá você consegue ver todas as informações das rotas como, metodos, parametros, exemplos do body, etc.

## 🤔 Informações

- Esse projeto foi desenvolvido seguindo as restrições de arquitetura REST

## 🧪 Tests (como testar)

- Essa aplicação conta com testes unitarios e integrados, para verificar se os dados que são retornados de cada função estão corretos, assim facilitando o debug do código com muito mais precisão.
  - Primeiro test Suites: testa de forma individual cada função da aplicação.
  - Segundo test Suites: testa de forma todo o fluxo completo da aplicação, simulando uma chamada no endpoint **/calcpriceplan**.

## 🌎 Aplicação online

- Esse serviço está online e disponivel, você consegue acessar ele pelo seguinte endereço [/calcpriceplan](https://frontend-controletarefa.herokuapp.com/), passando um body no seguinte formato
  {
  origin: "011",
  destiny: "016",
  plan: "1",
  time: "80"
  }

## 🧪 Como rodar o projeto local e testar

### ➡️ Criar o banco de dados no docker

- Com o docker já instalado, basta rodar `docker run --name telzin_postgres -e POSTGRES_PASSWORD=mm1234 -p 5432:5432 -d postgres`
- Rodar `docker ps` para verificar se o banco de dados foi criado.

### ➡️ Rodar o projeto

- Para rodar localmente, basta entrar na pasta raiz e rodar `yarn start` ou `npm run start`.
- Ainda na pasta raiz, rode um `yarn start` para criar a tabela caso não exista e popular a tabela com os dados.
- Depois basta rodar um `yarn nodemon index.ts`.
- Tudo pronto, agora é só acessar os endpoins e ver a aplicação backend funcionando.

### ➡️ Tests (como testar)

- Com o banco de dados funcionando, na pasta raiz do projeto basta rodar `yarn test` ou `npm run test` e aguardar.

README feito com ❤️ by **MarquisAlexander**
