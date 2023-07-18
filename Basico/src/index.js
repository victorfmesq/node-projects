const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.json({
    message: "Response passada por JSON.",
  });
});

app.get("/projects", (request, response) => {
  response.json(["projeto 1", "projeto 2"]);
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
