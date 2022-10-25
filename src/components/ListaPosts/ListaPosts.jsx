import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";
import { useEffect, useState } from "react"; // Hooks do react (funções)

const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio, para posteriormente "preenchê-lo" com os dados vindos da API. Esta atribuição será feita com auxilio de setPosts */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* console.log(serverApi);
  const postsTemp = []; */

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return <mark>Carregando...</mark>;
  } else {
    return <mark>Carregado!</mark>;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};
export default ListaPosts;
