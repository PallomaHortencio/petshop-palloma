import { TextField, Button } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pets Contato</h2>

      <Caixa id="contato">
        <form className={estilos.formulario} method="post">
          <div>
            <TextField
              label="Nome"
              variant="filled"
              fullWidth
              required
              helperText="Voce deve digitar o seu nome"
            />
          </div>

          <div>
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              required
              helperText="Informe um e-mail para contato"
            />
          </div>

          <div>
            <TextField
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText="Digite uma sugestão"
              multiline
              rows={6}
            />
          </div>

          <div>
            <Button type="submite" variant="contained">
              ENVIAR MENSAGEM!
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
