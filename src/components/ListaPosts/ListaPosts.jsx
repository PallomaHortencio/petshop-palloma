import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
import { useEffect, useState } from "react"; // Hooks do react (funções)
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import ArtigoPost from "../ArtigoPost/ArtigoPost";

const ListaPosts = ({ url }) => {
  /* Iniciamos o state do componente com um array vazio, para posteriormente "preenchê-lo" com os dados vindos da API. Esta atribuição será feita com auxilio de setPosts */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* console.log(serverApi);
  const postsTemp = []; */

  useEffect(() => {
    async function getPosts() {
      try {
        // const resposta = await fetch(`${serverApi}/posts`);

        // Solução Guilherme
        // const resposta = await fetch(`${serverApi}/${url || "posts"}`);

        // Solução Adriel
        /* const resposta = await fetch(
          `${serverApi}/${url != undefined ? url : "posts"}`
        ); */

        const resposta = await fetch(`${serverApi}/${url}`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
    /* É necessário indicar a url como dependência pois ela muda toda vez em que a categoria é clicada.
    Desta forma, o useEffect "entende" que ele deve executar novamente as suas ações, (neste caso, executar novamente o fetch na API) */
  }, [url]);

  if (loading) {
    return <LoadingDesenho texto="posts..." />;
  }

  if (posts.length === 0) {
    return <h2 style={{ textAlign: "center" }}>Não há posts!</h2>;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};
export default ListaPosts;
