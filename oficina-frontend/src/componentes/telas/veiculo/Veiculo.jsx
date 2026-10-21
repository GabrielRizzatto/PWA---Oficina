import { useState, useEffect } from "react";
import VeiculoContext from "./VeiculoContext";
import Tabela from "./Tabela";
import Formulario from "./Formulario";
import Carregando from "../../comuns/Carregando";
import {
  getVeiculosAPI,
  deleteVeiculoPorIdAPI,
  cadastraVeiculoAPI,
} from "../../../servicos/VeiculoServico";
import { getClientesAPI } from "../../../servicos/ClienteServico";

function Veiculo() {
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [listaClientes, setListaClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [editar, setEditar] = useState(false);
  const [exibirForm, setExibirForm] = useState(false);
  const [objeto, setObjeto] = useState({
    id: "",
    placa: "",
    marca: "",
    modelo: "",
    clienteId: "",
  });

  const recuperaVeiculos = async () => {
    setCarregando(true);
    setListaObjetos(await getVeiculosAPI());
    setListaClientes(await getClientesAPI());
    setCarregando(false);
  };

  const remover = async (id) => {
    if (window.confirm("Deseja remover este veículo?")) {
      let retornoAPI = await deleteVeiculoPorIdAPI(id);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      recuperaVeiculos();
    }
  };

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({ id: "", placa: "", marca: "", modelo: "", clienteId: "" });
    setExibirForm(true);
  };

  const editarObjeto = (id) => {
    const veiculoSelecionado = listaObjetos.find(
      (veiculo) => veiculo.id === id,
    );
    setObjeto(veiculoSelecionado);
    setEditar(true);
    setAlerta({ status: "", message: "" });
    setExibirForm(true);
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraVeiculoAPI(objeto, metodo);
      if (retornoAPI.status === "error") {
        setAlerta({ status: "error", message: retornoAPI.message });
      } else {
        setAlerta({ status: "success", message: "Veículo salvo com sucesso!" });
        setObjeto(retornoAPI);
        if (!editar) setEditar(true);
      }
    } catch (err) {
      console.error(err.message);
    }
    recuperaVeiculos();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  useEffect(() => {
    recuperaVeiculos();
  }, []);

  return (
    <VeiculoContext.Provider
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
        listaClientes,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Formulario />
    </VeiculoContext.Provider>
  );
}

export default Veiculo;
