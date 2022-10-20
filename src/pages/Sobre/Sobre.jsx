import estilos from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>
      <div id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          dolorum modi veniam ut non suscipit neque alias iste impedit maiores!
        </p>
        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          pariatur. Quaerat recusandae tempore dolore officiis deleniti dolorum
          at voluptate enim!
        </p>
        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
          similique. Possimus, eius temporibus voluptatem magnam accusamus
          laborum quisquam recusandae praesentium.
        </p>
      </div>
    </section>
  );
};

export default Sobre;
