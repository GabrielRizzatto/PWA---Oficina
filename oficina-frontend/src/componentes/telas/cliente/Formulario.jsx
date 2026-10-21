import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import ClienteContext from "./ClienteContext";
import Col from "react-bootstrap/Col";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Formulario() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    alerta,
    exibirForm,
    setExibirForm,
  } = useContext(ClienteContext);

  return (
    <Dialogo
      id="modalEdicao"
      titulo="Cliente"
      idform="formulario"
      acaoCadastrar={acaoCadastrar}
      exibirForm={exibirForm}
      setExibirForm={setExibirForm}
    >
      <Alerta alerta={alerta} />

      <Col xs={12} md={12}>
        <CampoEntrada
          value={objeto.id}
          id="txtId"
          name="id"
          label="ID"
          tipo="text"
          onchange={handleChange}
          readonly={true}
        />
      </Col>

      <Col xs={12} md={12}>
        <CampoEntrada
          value={objeto.nome}
          id="txtNome"
          name="nome"
          label="Nome"
          tipo="text"
          onchange={handleChange}
          msgvalido="Campo nome OK!"
          msginvalido="Informe o nome do cliente"
          requerido={true}
          readonly={false}
          maxCaracteres={40}
        />
      </Col>

      <Col xs={12} md={12}>
        <CampoEntrada
          value={objeto.contato}
          id="txtContato"
          name="contato"
          label="Contato"
          tipo="text"
          onchange={handleChange}
          msgvalido="Campo contato OK!"
          msginvalido="Informe os dados de contato do cliente"
          requerido={true}
          readonly={false}
          maxCaracteres={40}
        />
      </Col>
    </Dialogo>
  );
}

export default Formulario;
