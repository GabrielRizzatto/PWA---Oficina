// routes/rotas.js
const { Router } = require("express");
const rotasClientes = require("./rotasCliente");
const rotasVeiculos = require("./rotasVeiculo");
const rotasOrdensServico = require("./rotasOrdemServico");

const rotas = new Router();

rotas.use(rotasClientes);
rotas.use(rotasVeiculos);
rotas.use(rotasOrdensServico);

module.exports = rotas;
