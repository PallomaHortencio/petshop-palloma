import estilos from "./Caixa.module.css";

const Caixa = (props) => {
  return (
    <div className={`${estilos.caixa} ${props.listaDeClasses || ""}`}>
      {props.children}
    </div>
  );
};

/* Versão com props desestruturada */
/* const Caixa = ({ children, listaDeClasses }) => {
  return (
    <div className={`${estilos.caixa} ${props.listaDeClasses || ""}`}>
      {children}
    </div>
  );
}; */

export default Caixa;
