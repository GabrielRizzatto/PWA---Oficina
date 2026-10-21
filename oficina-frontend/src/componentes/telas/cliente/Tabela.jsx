import { useContext } from "react";
import ClienteContext from "./ClienteContext";
import Alerta from "../../comuns/Alerta";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function Tabela() {
  const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
    useContext(ClienteContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clientes</h1>
      <Alerta alerta={alerta} />
      <Button variant="primary" onClick={() => novoObjeto()}>
        Novo <i className="bi bi-file-earmark-plus"></i>
      </Button>
      {listaObjetos.length === 0 && <h1>Nenhum cliente encontrado</h1>}
      {listaObjetos.length > 0 && (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Ações</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Contato</th>
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
                <td>{objeto.nome}</td>
                <td>{objeto.contato}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Tabela;
