import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import OrdemServicoContext from "./OrdemServicoContext";
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
    listaVeiculos,
  } = useContext(OrdemServicoContext);

  return (
    <Dialogo
      id="modalEdicao"
      titulo="Ordem de Serviço"
      idform="formulario"
      acaoCadastrar={acaoCadastrar}
      exibirForm={exibirForm}
      setExibirForm={setExibirForm}
    >
      <Alerta alerta={alerta} />

      <Col xs={12} md={4}>
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

      <Col xs={12} md={8}>
        <CampoSelect
          value={objeto.statusReparacao}
          id="txtStatus"
          name="statusReparacao"
          label="Estado da Reparação"
          onchange={handleChange}
          msgvalido="Estado definido!"
          msginvalido="Selecione um estado"
          requerido={true}
        >
          <option value="Pendente">Pendente</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Concluído">Concluído</option>
        </CampoSelect>
      </Col>

      <Col xs={12} md={12}>
        <CampoSelect
          value={objeto.veiculoId}
          id="txtVeiculo"
          name="veiculoId"
          label="Veículo"
          onchange={handleChange}
          msgvalido="Veículo selecionado!"
          msginvalido="Selecione um veículo"
          requerido={true}
        >
          {listaVeiculos.map((veiculo) => (
            <option key={veiculo.id} value={veiculo.id}>
              {veiculo.placa} - {veiculo.marca} {veiculo.modelo} (
              {veiculo.cliente?.nome})
            </option>
          ))}
        </CampoSelect>
      </Col>

      <Col xs={12} md={12}>
        <CampoEntrada
          value={objeto.descricaoProblema}
          id="txtDescricao"
          name="descricaoProblema"
          label="Descrição do Problema"
          tipo="text"
          onchange={handleChange}
          msgvalido="OK!"
          msginvalido="Informe a descrição da avaria"
          requerido={true}
          maxCaracteres={200}
        />
      </Col>
    </Dialogo>
  );
}

export default Formulario;
