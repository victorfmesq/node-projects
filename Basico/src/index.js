const projectsRoutes = require("./routes/projects"); // importa rotas de projetos
const express = require("express"); // importa express
const { BASE_ROUTE_PATH_PROJECTS } = require("./routes/constants/index");

const app = express();

const PORT = "4000";

app.use(express.json()); // configura o express para receber JSON no corpo das requisições
app.use(BASE_ROUTE_PATH_PROJECTS, projectsRoutes); // configura o caminho para as rotas de projects

app.get("/", (request, response) => {
  response.send("Rota padrão");
});

app.listen(PORT, () => {
  console.log(`Servidor inicializado na porta ${PORT}!`);
});

// Criando uma api usando node com express

// importa a lib do express. (no node utiliza-se o metodo require)
// const express = require("express");

// // Inicializa a aplicação do express
// const app = express();

// configura o express para receber JSON no corpo da requisição
// app.use(express.json());

// /**Cria uma rota do tipo GET para o endereço localhost raiz '/'. E envia de volta
//  * uma resposta com a string selecionada.
//  *
//  * metodo .get recebe como parametro:
//  *  - uma rota
//  *  - uma função com 2 parametros (request e response)
//  *     - request: requisição vinda do cliente
//  *     - response: resposta a ser enviada para o cliente
//  */
// app.get("/", (request, response) => {
//   /**O parametro response possui 2 metodos de envio de respostas.
//    * - response.send(): Envia a resposta para o cliente.
//    * - response.json(): Envia uma resposta em formato de JSON p/ o cliente
//    */

//   // response.send("Ola Mundo em Node!");

//   response.json({
//     message: "Response passada por JSON.",
//   });
// });

/**Configura a porta que sera utilizada pela aplicação
 *
 * Ou seja, ao excutar a aplicação a porta em questão ficara
 * ocupada no pc para que esse app fique vigiando qualquer
 * requisição que chegar nas portas acima para a rota abaixo.
 */

// app.listen("4000", () => {
//   console.log("Servidor inicializado na porta 4000!");
// });

/**
 * Para executar a aplicação, abra o terminal no diretório do projeto
 * e digite o comando:
 * >> node .\src\index.js
 */

/**
 * Para acessar os parametros de consulta (QUERY PARAMS):
 * GET http://localhost:4000/projects?Key=value&Key2=value2
 *
 * GET http://localhost:4000/projects?Nome=Fulano&Idade=20
 *
 * ? => caractere que indica inicio da consulta
 * & => concatenador de parametros
 * = => caractere que atribui um valor à uma chave
 *
 * para acessar os parametros de consulta:
 *
 * const query = request.query (query é um objeto)
 * ou
 * const {<params>} = request.query (desetruturação das props dentro de query)
 */

/**
 * Para acessar os parametros de rota (ROUTE PARAMS):
 * PUT http://localhost:4000/projects/:param1/:param2
 *
 * PUT http://localhost:4000/projects/:id/:name
 *
 * : => indicador de parametro de rota
 *
 * para acessar os parametros de rota:
 *
 * const params = request.params;
 * ou
 * const {<params>} = request.params;
 */
