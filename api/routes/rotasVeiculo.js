const { Router } = require("express");
const {
  getVeiculos,
  addVeiculo,
  updateVeiculo,
  deleteVeiculo,
} = require("../controllers/veiculoController");

const rotasVeiculos = new Router();

rotasVeiculos.route("/veiculos").get(getVeiculos).post(addVeiculo);

rotasVeiculos.route("/veiculos/:id").put(updateVeiculo).delete(deleteVeiculo);

module.exports = rotasVeiculos;
