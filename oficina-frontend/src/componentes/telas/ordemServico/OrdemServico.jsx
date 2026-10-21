import { useState, useEffect } from "react";
import OrdemServicoContext from "./OrdemServicoContext";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from "../../comuns/Carregando";
import {
  getOrdensServicoAPI,
  deleteOrdemServicoPorIdAPI,
  cadastraOrdemServicoAPI,
} from "../../../servicos/OrdemServicoServico";
import { getVeiculosAPI } from "../../../servicos/VeiculoServico";

function OrdemServico() {
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [listaVeiculos, setListaVeiculos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editar, setEditar] = useState(false);
  const [exibirForm, setExibirForm] = useState(false);

  // O estado inicial de statusReparacao é "Pendente"
  const [objeto, setObjeto] = useState({
    id: "",
    descricaoProblema: "",
    statusReparacao: "Pendente",
    veiculoId: "",
  });

  const recuperaOrdens = async () => {
    setCarregando(true);
    setListaObjetos(await getOrdensServicoAPI());
    setListaVeiculos(await getVeiculosAPI());
    setCarregando(false);
  };

  const remover = async (id) => {
    if (window.confirm("Deseja remover esta ordem de serviço?")) {
      let retornoAPI = await deleteOrdemServicoPorIdAPI(id);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      recuperaOrdens();
    }
  };

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({
      id: "",
      descricaoProblema: "",
      statusReparacao: "Pendente",
      veiculoId: "",
    });
    setExibirForm(true);
  };

  const editarObjeto = (id) => {
    const ordemSelecionada = listaObjetos.find((ordem) => ordem.id === id);
    setObjeto(ordemSelecionada);
    setEditar(true);
    setAlerta({ status: "", message: "" });
    setExibirForm(true);
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraOrdemServicoAPI(objeto, metodo);
      if (retornoAPI.status === "error") {
        setAlerta({ status: "error", message: retornoAPI.message });
      } else {
        setAlerta({
          status: "success",
          message: "Ordem de Serviço salva com sucesso!",
        });
        setObjeto(retornoAPI);
        if (!editar) setEditar(true);
      }
    } catch (err) {
      console.error(err.message);
    }
    recuperaOrdens();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  useEffect(() => {
    recuperaOrdens();
  }, []);

  return (
    <OrdemServicoContext.Provider
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
        listaVeiculos,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Formulario />
    </OrdemServicoContext.Provider>
  );
}

export default OrdemServico;
