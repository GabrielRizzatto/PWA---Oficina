const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Cliente = require("../entities/cliente");

const getClientesDB = async () => {
  try {
    const clientes = await prisma.cliente.findMany({
      orderBy: { nome: "asc" },
    });

    return clientes.map(
      (cliente) => new Cliente(cliente.id, cliente.nome, cliente.contato),
    );
  } catch (error) {
    throw "Erro no banco: " + error;
  }
};

const addClienteDB = async (nome, contato) => {
  try {
    const novoCliente = await prisma.cliente.create({
      data: { nome, contato },
    });
    return new Cliente(novoCliente.id, novoCliente.nome, novoCliente.contato);
  } catch (error) {
    throw "Erro ao inserir no banco: " + error;
  }
};
const updateClienteDB = async (id, nome, contato) => {
  try {
    const clienteAtualizado = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: { nome, contato },
    });
    return clienteAtualizado;
  } catch (error) {
    throw "Erro ao atualizar o cliente: " + error;
  }
};

const deleteClienteDB = async (id) => {
  try {
    const clienteEliminado = await prisma.cliente.delete({
      where: { id: parseInt(id) },
    });
    return clienteEliminado;
  } catch (error) {
    throw "Erro ao apagar o cliente: " + error;
  }
};

module.exports = {
  getClientesDB,
  addClienteDB,
  updateClienteDB,
  deleteClienteDB,
};
