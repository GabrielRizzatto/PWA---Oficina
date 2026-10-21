const {
  getOrdensServicoDB,
  addOrdemServicoDB,
  updateOrdemServicoDB,
  deleteOrdemServicoDB,
} = require("../usecases/ordemServicoUseCases");

const getOrdensServico = async (request, response) => {
  await getOrdensServicoDB()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((erro) => {
      response.status(400).json({ status: "error", message: erro });
    });
};

const addOrdemServico = async (request, response) => {
  const { descricaoProblema, veiculoId } = request.body;

  await addOrdemServicoDB(descricaoProblema, veiculoId)
    .then((data) => {
      response.status(201).json(data);
    })
    .catch((erro) => {
      response.status(400).json({ status: "error", message: erro });
    });
};

const updateOrdemServico = async (request, response) => {
  const { id } = request.params;
  const { descricaoProblema, statusReparacao, veiculoId } = request.body;

  await updateOrdemServicoDB(id, descricaoProblema, statusReparacao, veiculoId)
    .then((data) => response.status(200).json(data))
    .catch((erro) =>
      response.status(400).json({ status: "error", message: erro }),
    );
};

const deleteOrdemServico = async (request, response) => {
  const { id } = request.params;

  await deleteOrdemServicoDB(id)
    .then((data) =>
      response.status(200).json({
        status: "success",
        message: "Registo apagado com sucesso",
        data,
      }),
    )
    .catch((erro) =>
      response.status(400).json({ status: "error", message: erro }),
    );
};

module.exports = {
  getOrdensServico,
  addOrdemServico,
  updateOrdemServico,
  deleteOrdemServico,
};
