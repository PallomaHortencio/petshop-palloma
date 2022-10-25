# React: Projeto PetShop

Projeto iniciado através do [Create React App](https://github.com/facebook/create-react-app).

Obs: estebprojeto poderia ser criado também a partir do Vite.

## Execução do app

Na 1ª vez, é necessario `npm install` para gerar node_modules (com dependências etc).
E para executar, smepre use `npm start`.

## Dica: desabilizar o compact foulder do VSCode em Configurações

## Sobre Módulos CSS

O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

Arquivo de módulo devem ser nomeados como `Componente.module.css`.

A importação de módulos CSS deve ser feita com `import nome from "caminho-do-modulo"`.

## Sobre Media Query

### Mobile Firts:

telas a partir de x tamanho (min-width)

### Desktop First

telas de até o tamanho x (max-width)

## Uso de rotas com a lib react-router-dom (versão 5)

### Instalação

``npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib
   `import {BrowserRouter, Route, Switch} from "react-router-dom";`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "pagina ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteca a troca entre componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

### Menu.jsx

1. Importar o NavLink
   `import {NavLink} from "react-router-dom";`

2. Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamado caixa

Em vez de usar uma ``<div>` em cada página agrupando conteúdos diferentes, isolamos ela num componente genérico (**Caixa**), aplicamos o CSS uma única vez usando módulo do componente, e programamos através de `props` o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**)

**Dica:** você pode usar **destructuring** de objetos nas `props`!

## Usando uma api fake para simular processos de consumo de dados dinâmicos

# Instalação global do pacote JSON-SERVER

`npm install -g json-server`

Obs.: se tiver problemas ao executar, utilize o **Node.js comand prompt**

### utilização de um arquivo.json para simular a base de dados da api

É necessario criar um **arquivo.json** em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raiz de petshop.). Este arquivo deve ser composto por um grande objeto contendo arrays com outros objetos.

# Execução do servidor da api

1. Usando o **Node.js comand prompt**, aacesse a pasta onde está o **arquivo.json**

2. Execute o comando `json-server --watch db.json --port 2112`

Obs.: o número da porta deve ser diferente de 3000 (que é padrão no json-server) pois esta porta já estará sendo usada pelo app **React**.

Dica: no **package.json** do seu app adicione em `scripts` uma nova propreidade chamada `api` valendo `json-server --watch db.json --port 2112`. Desta forma, você poderá executar o server da API digitando simplismente `npm rum api`

Após a execucação da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API, acessível através da URL _localhost:porta/nome-do-endpoint_.

Exemplos:

`http://localhost:2112/posts`
`http://localhost:2112/categorias`
`http://localhost:2112/contatos`

Sobre o useEffect
Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente

Recebe dois parametros:
1º: função callback com o que será executado
2º: lista de dependências que indicarão ao useEffect quando ele deverá funcionar

- se não passar a lista (ou seja, se deixar sem []), useEffect executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito.

- se passar a lista vazia (ou seja, deixar o []\_ vazio) useEffect executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.
