import { TextField, Button } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
import { useState } from "react";
import serverApi from "../../api/servidor-api";

const Contato = () => {
  /* Eventos/Funções para captura da digitação */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarContato = async (event) => {
    event.preventDefault();

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    /* Script para envio dos dados para a API */

    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
    } catch (error) {
      console.log("Deu ruim: " + error.message);
    }
  };

  /* Qunado todas deixarem de ser undefined, desabilitado se tornará false e com isso  o botão será habilitado */
  let desabilitado = !nome || !email || !mensagem;
  /*let desabilitado = !nome === "" || !email === "" || !mensagem === ""; */

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pets Contato</h2>

      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Voce deve digitar o seu nome"
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              helperText="Informe um e-mail para contato"
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
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
            <Button type="submit" variant="contained" disabled={desabilitado}>
              ENVIAR MENSAGEM!
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
