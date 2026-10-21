import { useContext } from "react";
import VeiculoContext from "./VeiculoContext";
import Alerta from "../../comuns/Alerta";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
    useContext(VeiculoContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Veículos</h1>
      <Alerta alerta={alerta} />
      <Button variant="primary" onClick={() => novoObjeto()}>
        Novo <i className="bi bi-file-earmark-plus"></i>
      </Button>
      {listaObjetos.length === 0 && <h1>Nenhum veículo encontrado</h1>}
      {listaObjetos.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Ações</th>
              <th>ID</th>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cliente (Dono)</th>
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
                <td>{objeto.placa}</td>
                <td>{objeto.marca}</td>
                <td>{objeto.modelo}</td>
                {}
                <td>{objeto.cliente?.nome}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
export default Tabela;
