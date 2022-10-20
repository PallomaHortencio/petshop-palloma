import estilos from "./ListaPosts.module.css";

const ListaPosts = () => {
  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Título</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          exercitationem, amet voluptas reprehenderit qui.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          exercitationem, amet voluptas reprehenderit qui.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          exercitationem, amet voluptas reprehenderit qui.
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          exercitationem, amet voluptas reprehenderit qui.
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
