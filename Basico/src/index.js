const express = require("express");

const app = express();

const projects = [
  { id: 1, value: "projeto 1" },
  { id: 2, value: "projeto 2" },
  { id: 3, value: "projeto 3" },
];

const getProjectsById = (id) => {
  return projects.find((proj) => proj.id === id);
};

const updateProjectValue = (id, value) => {
  return projects.map((proj) =>
    proj.id === id ? { id: id, value: value } : proj
  );
};

app.get("/", (request, response) => {
  response.json({
    message: "Response passada por JSON.",
  });
});

app.get("/projects", (request, response) => {
  const query = request.query;

  response.json(Object.keys(query).length > 0 ? query : projects);
});

app.post("/projects", (request, response) => {
  response.json(["projeto 1", "projeto 2", "projeto 3"]);
});

app.put("/projects/:id/:value", (request, response) => {
  const { id, value } = request.params;

  const updatedProj = updateProjectValue(parseInt(id), value);

  const result = projects.map(
    (proj) => proj.id === updatedProj.id && updatedProj
  );

  response.json(id !== null ? updatedProj : projects);
});

app.delete("/projects/:id", (request, response) => {
  response.json(["projeto 2", "projeto 3"]);
});

app.listen("4000", () => {
  console.log("Servidor inicializado na porta 4000!");
});

// // Criando uma api usando node com express

// // importa a lib do express. (no node utiliza-se o metodo require)
// const express = require("express");

// // Inicializa a aplicação do express
// const app = express();

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

// /**Configura a porta que sera utilizada pela aplicação
//  *
//  * Ou seja, ao excutar a aplicação a porta em questão ficara
//  * ocupada no pc para que esse app fique vigiando qualquer
//  * requisição que chegar nas portas acima para a rota abaixo.
//  */
// app.listen("4000", () => {
//   console.log("Servidor inicializado na porta 4000!");
// });

// /**
//  * Para executar a aplicação, abra o terminal no diretório do projeto
//  * e digite o comando:
//  * >> node .\src\index.js
//  */

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
