const { Router } = require("express");
const {
  getClientes,
  addCliente,
  updateCliente,
  deleteCliente,
} = require("../controllers/clienteController");

const rotasClientes = new Router();

rotasClientes.route("/clientes").get(getClientes).post(addCliente);

rotasClientes.route("/clientes/:id").put(updateCliente).delete(deleteCliente);

module.exports = rotasClientes;
