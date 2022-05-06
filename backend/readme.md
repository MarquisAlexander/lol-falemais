<h1 align="center"></h1>

<h2 align="center">
  🚀 V8-Backend
</h2>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-informações">Informações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-aplicação-online">Aplicação online</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-documentação-no-insomnia-endpoints">Documentação endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar-o-projeto-local-e-testar">Como rodar o projeto</a>
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

## 📔 Documentação no Insomnia (Endpoints)

- Esse projeto conta com os seguintes endpoint:
  - `POST` **/calcpriceplan** - endpoint para calcular o preço de quanto você vai economizar caso você use algum plano de ligação da Telzin.
  - `GET` **/getallcodesddd** - endpoint que retorna uma lista com todos os códigos de DDDs disponíveis.
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

### ➡️ Rodar projeto

- Para rodar localmente, basta entrar na pasta raiz do backend e rodar `docker-compose up`, esse comando vai executar os seguintes passos
  - criar uma imagem para o docker, 
  - criar container para o projeto nodeJS
  - criar um container para o banco de dados 
  - Popular o banco de dados

  **você pode acompanhar todo o passo a passo lá no arquivo docker-composer.yml**
- Tudo pronto, agora é só acessar os endpoins e ver a aplicação backend funcionando.

### ➡️ Tests (como testar)

- Com o banco de dados funcionando, navegue até a pasta raiz do projeto backend e basta rodar `yarn test` ou `npm run test` e aguardar.

README feito com ❤️ by **MarquisAlexander**
