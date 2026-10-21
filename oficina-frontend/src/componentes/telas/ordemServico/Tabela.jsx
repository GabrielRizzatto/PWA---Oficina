import { useContext } from "react";
import OrdemServicoContext from "./OrdemServicoContext";
import Alerta from "../../comuns/Alerta";
import Table from "react-bootstrap/Table";
import { Button, Badge } from "react-bootstrap";

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
    useContext(OrdemServicoContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ordens de Serviço</h1>
      <Alerta alerta={alerta} />
      <Button variant="primary" onClick={() => novoObjeto()}>
        Nova Ordem <i className="bi bi-file-earmark-plus"></i>
      </Button>
      {listaObjetos.length === 0 && (
        <h1>Nenhuma ordem de serviço encontrada</h1>
      )}
      {listaObjetos.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Ações</th>
              <th>ID</th>
              <th>Data</th>
              <th>Veículo</th>
              <th>Cliente</th>
              <th>Descrição</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {listaObjetos.map((objeto) => (
              <tr key={objeto.id}>
                <td align="center">
                  <Button
                    variant="info"
                    className="me-2"
                    onClick={() => editarObjeto(objeto.id)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="danger" onClick={() => remover(objeto.id)}>
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
                <td>{objeto.id}</td>
                <td>
                  {new Date(objeto.dataEntrada).toLocaleDateString("pt-PT")}
                </td>
                <td>
                  {objeto.veiculo?.placa} - {objeto.veiculo?.modelo}
                </td>
                <td>{objeto.veiculo?.cliente?.nome}</td>
                <td>{objeto.descricaoProblema}</td>
                <td>
                  <Badge
                    bg={
                      objeto.statusReparacao === "Concluído"
                        ? "success"
                        : objeto.statusReparacao === "Em Andamento"
                          ? "warning"
                          : "secondary"
                    }
                  >
                    {objeto.statusReparacao}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
export default Tabela;
