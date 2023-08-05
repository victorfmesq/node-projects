# Criar aplicação Node.js com Typescript

### Iniciar a aplicação

```shell
npm init -y

# ou

yarn init -y
```

### Fazer a instalação do Typescript na pasta do projeto, como uma dependência de desenvolvimento.

Como o código final é convertido para javascript antes de ser disponibilizado online, só precisaremos do Typescript em ambiente de desenvolvimento.

```shell
npm install typescript ts-node-dev @types/node tsconfig-paths -D

# ou

yarn add typescript ts-node-dev @types/node tsconfig-paths -D
```

> Foi adicionado o pacote `tsconfig-paths` para também ser instalado. Esse pacote servirá para criação de atalhos para os paths de arquivos ao usar o `import`.

### Criar o arquivo "tsconfig.json" que conterá as configurações do Typescript, com o comando:

`npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true`

### Aquivo .gitignore

```.gitignore
.idea/
.vscode/
node_modules/
build/
temp/
.env
coverage
ormconfig.json
dist

uploads/*
!uploads/.gitkeep
```

### Criar a pasta uploads com o arquivo .gitkeep dentro para que os arquivos carregados nessa pasta não sejam incluídos no controle de versão do Git.

### Criar a pasta src e o primeiro arquivo:

```shell
mkdir src

touch src/server.ts
```

### Código inicial do arquivo:

`console.log("Hello world")`

### Compilando Typescript

`npx tsc`

### O código compilado foi gerado na pasta build.

### **Executar o servidor em desenvolvimento**

### Usaremos a biblioteca `ts-node-dev` para execução da aplicação em desenvolvimento.

### Incluir o script para rodar o `ts-node-dev` no arquivo `package.json`.

```json
"scripts": {
  "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
}
```

### Executar o servidor:

```shell
npm run dev

# ou

yarn dev
```
