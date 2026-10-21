const {
  getVeiculosDB,
  addVeiculoDB,
  updateVeiculoDB,
  deleteVeiculoDB,
} = require("../usecases/veiculoUseCases");

const getVeiculos = async (request, response) => {
  await getVeiculosDB()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((erro) => {
      response.status(400).json({
        status: "error",
        message: "Erro ao consultar veículos: " + erro,
      });
    });
};

const addVeiculo = async (request, response) => {
  const { placa, marca, modelo, clienteId } = request.body;

  await addVeiculoDB(placa, marca, modelo, clienteId)
    .then((data) => {
      response.status(201).json(data);
    })
    .catch((erro) => {
      response.status(400).json({
        status: "error",
        message: "Erro ao criar veículo: " + erro,
      });
    });
};

const updateVeiculo = async (request, response) => {
  const { id } = request.params;
  const { placa, marca, modelo, clienteId } = request.body;

  await updateVeiculoDB(id, placa, marca, modelo, clienteId)
    .then((data) => response.status(200).json(data))
    .catch((erro) =>
      response.status(400).json({ status: "error", message: erro }),
    );
};

const deleteVeiculo = async (request, response) => {
  const { id } = request.params;

  await deleteVeiculoDB(id)
    .then((data) =>
      response
        .status(200)
        .json({ status: "success", message: "Veículo apagado", data }),
    )
    .catch((erro) =>
      response.status(400).json({ status: "error", message: erro }),
    );
};

module.exports = { getVeiculos, addVeiculo, updateVeiculo, deleteVeiculo };
