import { useState, useEffect } from "react";
import ClienteContext from "./ClienteContext";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from "../../comuns/Carregando";
import {
  getClientesAPI,
  deleteClientePorIdAPI,
  cadastraClienteAPI,
} from "../../../servicos/ClienteServico";

function Cliente() {
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editar, setEditar] = useState(false);
  const [exibirForm, setExibirForm] = useState(false);
  const [objeto, setObjeto] = useState({ id: "", nome: "", contato: "" });

  const recuperaClientes = async () => {
    setCarregando(true);
    setListaObjetos(await getClientesAPI());
    setCarregando(false);
  };

  const remover = async (id) => {
    if (
      window.confirm(
        "Deseja remover este cliente? Lembre-se que ele não pode ter veículos vinculados.",
      )
    ) {
      let retornoAPI = await deleteClientePorIdAPI(id);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      recuperaClientes();
    }
  };

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({ id: "", nome: "", contato: "" });
    setExibirForm(true);
  };

  const editarObjeto = (id) => {
    const clienteSelecionado = listaObjetos.find(
      (cliente) => cliente.id === id,
    );
    setObjeto(clienteSelecionado);
    setEditar(true);
    setAlerta({ status: "", message: "" });
    setExibirForm(true);
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraClienteAPI(objeto, metodo);
      if (retornoAPI.status === "error") {
        setAlerta({ status: "error", message: retornoAPI.message });
      } else {
        setAlerta({ status: "success", message: "Cliente salvo com sucesso!" });
        setObjeto(retornoAPI);
        if (!editar) {
          setEditar(true);
        }
      }
    } catch (err) {
      console.error(err.message);
    }
    recuperaClientes();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  useEffect(() => {
    recuperaClientes();
  }, []);

  return (
    <ClienteContext.Provider
      value={{
        listaObjetos,
        alerta,
        remover,
        objeto,
        editarObjeto,
        acaoCadastrar,
        handleChange,
        novoObjeto,
        exibirForm,
        setExibirForm,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Formulario />
    </ClienteContext.Provider>
  );
}

export default Cliente;
