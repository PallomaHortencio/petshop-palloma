import estilos from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos produtos</h2>

      <div className={estilos.produtos}>
        <article>
          <h3>Cama</h3>
          <p>Caminha para o seu pet dormir confortável.</p>
        </article>
        <article>
          <h3>Shampoo</h3>
          <p>Shampoo para seu pet ficar bem cheiroso.</p>
        </article>
        <article>
          <h3>Condicionador</h3>
          <p>
            Condicionador para seu pet ficar com os pelos sedosos, brilhantes e
            macio.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Produtos;
