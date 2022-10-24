import estilos from "./ListaPosts.module.css";
import serverApi from "../../api/servidor-api";

const ListaPosts = () => {
  console.log(serverApi);
  const postsTemp = [];

  const getPostos = async () => {
    try {
      const resposta = await fetch(`${serverApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.log("Deu ruim! " + error.message);
    }
  };

  getPostos();

  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};
export default ListaPosts;
