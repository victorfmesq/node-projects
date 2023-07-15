# Comandos NPM

Adicionando `nodemon` no projeto.

Nodemon é uma dependencia de desenvolvimento que atualiza meu servidor automaticamente após alguma alteração.

para utiliza-lo basta rodar o comando:

> `npm i -D nodemon`

- `npm`: comando que referencia o gerenciador de pacotes do node.
- `i`: é uma abreviação de `install`.
- `-D`: é uma flag que sinaliza que a dependecia só será **utilizada em ambiente de desenvolvimento**.
- `nodemon`: lib que queremos instalar.

para rodar o servidor usando nodemon utiliza-se o comando:

> `npx nodemon <file_path>`

apenas `nodemon <file_path>` não funciona pois a instalação esta dentro do node_modules do meu projeto e não eh de conhecimento do gerenciador de arquivos do node.

Portanto, para executar uma dependencia **dentro de um projeto** utiliza-se o comando `npx` (que busca o binario da lib dentro do `node_modules`).

## Criando script para rodar aplicação.

No **`package.json`**, procure a chave de script e adicione uma nova chave como sendo o nome do script.

```JSON
/*package.json*/

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": 'nodemon <file_path>' // nova chave
  },
```

E então, para inicializar o servidor chame o script usando `npm`.

> `npm start`\
> ou \
> `npm run start`

Note que, sempre que um script for adicionado, para executa-lo, deve-se usar o comando `run` antes do nome do script. Porém como a palavra `start` é reconhecida pelo npm, não precisa explicitar que é um script.
