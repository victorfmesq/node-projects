# Criando uma api com node

## [Curso API Restful iniciante](https://www.youtube.com/playlist?list=PLE0DHiXlN_qqOfRvFS0BiwZXGrsKs7HFx)

## Inicializando o npm.

### Instalar npm:

> `npm install -g npm`

### Download Node: [link](https://nodejs.org/en/download)

verificar versões:

```shell
node -v
npm -v
```

Crie um diretório para o projeto.

no diretório do projeto rode o comando:

> `npm init`

Em seguida preencha os campos conforme for necessário. (pode aceitar tudo como padrão)

**Entry point: index.js**

Após preencher os dados, digite Y.

## Express

> `npm install express`

## Nodemon

### Instalação:

> `npm i -D nodemon`

### Configuração

Parar inicializar o servidor:

> `npx nodemon ./src/index.js`

OU

```JSON
/*package.json*/

 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./src/index.js" // script to use "npm start" instead "npx nodemon <file_path>"
  },
```

> `npm start`

## Insomnia

### Download Insomnia: [link](https://insomnia.rest/download)

### Configuração
