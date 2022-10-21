import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pets Contato</h2>
      <Caixa id="contato">
        <p>
          <i>Em breve um formulário com biblioteca de componentes... </i>
        </p>
      </Caixa>
    </section>
  );
};

export default Contato;
