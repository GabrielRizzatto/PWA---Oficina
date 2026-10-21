import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import VeiculoContext from "./VeiculoContext";
import Col from "react-bootstrap/Col";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
import Dialogo from "../../comuns/Dialogo";

function Formulario() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    alerta,
    exibirForm,
    setExibirForm,
    listaClientes,
  } = useContext(VeiculoContext);

  return (
    <Dialogo
      id="modalEdicao"
      titulo="Veículo"
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
        <CampoSelect
          value={objeto.clienteId}
          id="txtCliente"
          name="clienteId"
          label="Cliente Proprietário"
          onchange={handleChange}
          msgvalido="Cliente selecionado!"
          msginvalido="Selecione um cliente"
          requerido={true}
        >
          {listaClientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nome}
            </option>
          ))}
        </CampoSelect>
      </Col>
      <Col xs={12} md={4}>
        <CampoEntrada
          value={objeto.placa}
          id="txtPlaca"
          name="placa"
          label="Placa"
          tipo="text"
          onchange={handleChange}
          msgvalido="OK!"
          msginvalido="Informe a placa"
          requerido={true}
          maxCaracteres={10}
        />
      </Col>
      <Col xs={12} md={4}>
        <CampoEntrada
          value={objeto.marca}
          id="txtMarca"
          name="marca"
          label="Marca"
          tipo="text"
          onchange={handleChange}
          msgvalido="OK!"
          msginvalido="Informe a marca"
          requerido={true}
          maxCaracteres={30}
        />
      </Col>
      <Col xs={12} md={4}>
        <CampoEntrada
          value={objeto.modelo}
          id="txtModelo"
          name="modelo"
          label="Modelo"
          tipo="text"
          onchange={handleChange}
          msgvalido="OK!"
          msginvalido="Informe o modelo"
          requerido={true}
          maxCaracteres={30}
        />
      </Col>
    </Dialogo>
  );
}

export default Formulario;
