const { Router } = require("express");
const {
  getOrdensServico,
  addOrdemServico,
  updateOrdemServico,
  deleteOrdemServico,
} = require("../controllers/ordemServicoController");

const rotasOrdensServico = new Router();

rotasOrdensServico.route("/ordens").get(getOrdensServico).post(addOrdemServico);

rotasOrdensServico
  .route("/ordens/:id")
  .put(updateOrdemServico)
  .delete(deleteOrdemServico);

module.exports = rotasOrdensServico;
