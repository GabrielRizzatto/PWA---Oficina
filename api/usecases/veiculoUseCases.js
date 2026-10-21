const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Veiculo = require("../entities/veiculo");

const getVeiculosDB = async () => {
  try {
    const veiculos = await prisma.veiculo.findMany({
      include: {
        cliente: true,
      },
      orderBy: { marca: "asc" },
    });

    return veiculos.map(
      (v) =>
        new Veiculo(v.id, v.placa, v.marca, v.modelo, v.clienteId, v.cliente),
    );
  } catch (error) {
    throw "Erro no banco ao buscar veículos: " + error;
  }
};

const addVeiculoDB = async (placa, marca, modelo, clienteId) => {
  try {
    const novoVeiculo = await prisma.veiculo.create({
      data: {
        placa,
        marca,
        modelo,
        clienteId,
      },
      include: {
        cliente: true,
      },
    });

    return new Veiculo(
      novoVeiculo.id,
      novoVeiculo.placa,
      novoVeiculo.marca,
      novoVeiculo.modelo,
      novoVeiculo.clienteId,
      novoVeiculo.cliente,
    );
  } catch (error) {
    throw "Erro ao inserir veículo no banco: " + error;
  }
};

const updateVeiculoDB = async (id, placa, marca, modelo, clienteId) => {
  try {
    const veiculoAtualizado = await prisma.veiculo.update({
      where: { id: parseInt(id) },
      data: { placa, marca, modelo, clienteId: parseInt(clienteId) },
      include: { cliente: true },
    });
    return veiculoAtualizado;
  } catch (error) {
    throw "Erro ao atualizar o veículo: " + error;
  }
};

const deleteVeiculoDB = async (id) => {
  try {
    const veiculoEliminado = await prisma.veiculo.delete({
      where: { id: parseInt(id) },
    });
    return veiculoEliminado;
  } catch (error) {
    throw "Erro ao apagar o veículo: " + error;
  }
};

module.exports = {
  getVeiculosDB,
  addVeiculoDB,
  updateVeiculoDB,
  deleteVeiculoDB,
};
