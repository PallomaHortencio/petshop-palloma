/* Exercício ListaCategorias.jsx

1- Montar o componente (rafce)
2- Programar a comunicação com a API para ler os dados do endpoint "categorias"
3- Manipular os states do componente
4- Fazer o componente ListaCategorias retornar uma lista com os nomes das categorias (<ul> <li>. */

import { useEffect, useState } from "react";
import serverApi from "../../api/servidor-api";
import estilos from "./ListaCategorias.module.css";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import { NavLink } from "react-router-dom";

const ListaCategorias = () => {
  /* Atribuição do useState para manipular os dados do componente
    1º parâmetro: variável que trará os dados
    2º parâmetro: funão responsavel por ataulizar (setter) 
    Obs.: o que colocamos no usoState representa o valor inicial */
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        /* await aguarda o termino do fetch, para depois atribuir o resultado */
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();

        /* Precisamos passar os dados capturador da API para o state do componente via Setter (obrigatório) */
        setCategorias(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);

  if (loading) return <LoadingDesenho texto="categorias..." />;

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => {
          return (
            <li key={id}>
              <NavLink
                activeClassName={estilos.ativo}
                exact
                to={`/categoria/${nome}`}
              >
                {nome}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
