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
