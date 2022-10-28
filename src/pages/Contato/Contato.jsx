import { TextField } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pets Contato</h2>

      <Caixa id="contato">
        <form method="post">
          <div>
            <TextField
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Informe um e-mail para contato"
            />
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
