import imagemLoading from "../../assets/images/loading.svg";
import Caixa from "../Caixa/Caixa";
import estilos from "./LoadingDesenho.module.css";

const LoadingDesenho = () => {
  return (
    <>
      <div className={estilos.loading}>
        <h2>Posts...</h2>
        <img src={imagemLoading} alt="" />
      </div>
    </>
  );
};

export default LoadingDesenho;
