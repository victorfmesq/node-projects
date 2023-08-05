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

---

### Configurando editorConfig

Abra o VS Code, procure pela extensão editorConfig e instale.

Na pasta raiz, clique com botão direito e seleciona a opção `generate .editorConfig` e adicione o codigo abaixo.

```shell
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

---

### Configurando ESLint

ESLint é um linter JavaScript que permite que você aplique um conjunto de padrões de estilo, formatação e codificação para sua base de código. Ele examina seu código e avisa quando você não está seguindo o padrão que definiu.

```shell
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# ou

yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### Na raiz do seu projeto crie um arquivo .eslintrc com uma configuração inicial do ESLint:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ]
}
```

### Criar o arquivo .eslintignore:

```txt
node_modules
dist
build
/*.js
```

### Adicionar um script no arquivo package.json para executar o lint:

```json
"scripts": {
  // ...
  "lint": "eslint . --ext .ts"
}
```

Esse comando faz basicamente com que o ESLint analise todos os arquivos dentro do projeto, indicando erros detectados de acordo com a configuração.

_Execute o script e verifique que nenhum erro deve ser retornado._

```shell
npm run lint

# ou

yarn lint
```

### **Adicionando regras:**

No arquivo `.eslintrc`, podemos adicionar o atributo rules ao objeto json para definição de regras.

Para cada regra podemos atribuir os seguintes valores: `"off", "warn" ou "error"`.

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn"
  }
}
```

A regra no-console irá indicar se há algum console.log() perdido pelo código.

### **Correção automática:**

O ESLint pode receber um parâmetro `--fix` para que tente corrigir automaticamente os problemas encontrados.

Vamos configurar outro script com a opção `--fix`.

```json
"scripts": {
  // ...
  "lint-fix": "eslint . --ext .ts --fix"
}
```

---

### Prettier

### Prettier é um formatador de código opinativo e, em conjunto com o ESLint, forma uma parceria perfeita para nós, desenvolvedores:

- ESLint define as convenções de código.
- Prettier realiza a formatação automática com base nas regras ESLint.

### Instalação:

```shell
npm install prettier -D

# ou

yarn add prettier -D
```

### Criar o arquivo `.prettierrc` com uma configuração básica do Prettier:

```JSON
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

### Os parâmetros são:

**semi**: definido como true, significa que o Prettier adicionará ponto-e-vírgulas quando necessário.

**trailingComma**: definido como all, significa que o Prettier colocará vírgulas no final dos objetos.

**singleQuote**: definido como true, significa que o Prettier usará automaticamente aspas simples em vez de aspas duplas.

**printWidth**: definido como 80, especifica que a impressora quebrará todas as linhas que excederem 80 caracteres.

### É fundamental que extensão `Prettier – Code Formatter` esteja instalada no VSCode, pois permitirá a formatação automática do código ao salvar o arquivo.

Verifique se a sua configuração do VS Code possui os parâmetros:

```json
"editor.formatOnPaste": true,
"editor.formatOnType": true,
"formattingToggle.affects": ["formatOnSave"]
```

Essas configurações formatarão seu código quando você colar o novo código e quando você salvar o código de qualquer extensão de arquivo que o Prettier entende.

### Configurando o Prettier para trabalhar com ESLint

Com ESLint e Prettier já instalados, instale esses dois pacotes também:

```shell
npm install eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D

# ou

yarn add eslint-config-prettier@6.15.0 eslint-plugin-prettier@3.2.0 -D
```

### `eslint-config-prettier`: Desativa todas as regras ESLint que têm o potencial de interferir com as regras do Prettier.

### `eslint-plugin-prettier`: Transforma regras do Prettier em regras ESLint.

### Ajustar o arquivo `.eslintrc`:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "prettier/prettier": "error"
  }
}
```
