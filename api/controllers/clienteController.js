const {
  getClientesDB,
  addClienteDB,
  updateClienteDB,
  deleteClienteDB,
} = require("../usecases/clienteUseCases");

const getClientes = async (request, response) => {
  await getClientesDB()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((erro) => {
      response.status(400).json({
        status: "error",
        message: "Erro ao consultar clientes: " + erro,
      });
    });
};

const addCliente = async (request, response) => {
  const { nome, contato } = request.body;

  await addClienteDB(nome, contato)
    .then((data) => {
      response.status(201).json(data);
    })
    .catch((erro) => {
      response.status(400).json({
        status: "error",
        message: "Erro ao criar cliente: " + erro,
      });
    });
};

const updateCliente = async (request, response) => {
  const { id } = request.params;
  const { nome, contato } = request.body;

  await updateClienteDB(id, nome, contato)
    .then((data) => response.status(200).json(data))
    .catch((erro) =>
      response.status(400).json({ status: "error", message: erro }),
    );
};

const deleteCliente = async (request, response) => {
  const { id } = request.params;

  await deleteClienteDB(id)
    .then((data) =>
      response
        .status(200)
        .json({ status: "success", message: "Cliente apagado", data }),
    )
    .catch((erro) =>
      response.status(400).json({ status: "error", message: erro }),
    );
};

module.exports = { getClientes, addCliente, updateCliente, deleteCliente };
