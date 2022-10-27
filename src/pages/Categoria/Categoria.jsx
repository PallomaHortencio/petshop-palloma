import estilos from "./Categoria.module.css";
import ListaPosts from "../../components/ListaPosts/ListaPosts";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";
import { useParams } from "react-router-dom";

/* Objetivo deste componente é exibir o ListaPosts filtrado pela Categoria escolhida no menu ListaCategorias */

const Categoria = () => {
  const { nome } = useParams();
  console.log(nome);
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Categorias</h2>

      <ListaCategorias />

      <ListaPosts url={`posts?categoria=${nome}`} />
    </section>
  );
};

export default Categoria;
