import estilos from "./Home.module.css";
import ListaPosts from "../../components/ListaPosts/ListaPots";

const Home = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Noticias</h2>
      <ListaPosts />
    </section>
  );
};

export default Home;
