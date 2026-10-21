const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const OrdemServico = require("../entities/ordemServico");

const getOrdensServicoDB = async () => {
  try {
    const ordens = await prisma.ordemServico.findMany({
      include: {
        veiculo: {
          include: { cliente: true },
        },
      },
      orderBy: { dataEntrada: "desc" },
    });

    return ordens.map(
      (o) =>
        new OrdemServico(
          o.id,
          o.descricaoProblema,
          o.statusReparacao,
          o.dataEntrada,
          o.veiculoId,
          o.veiculo,
        ),
    );
  } catch (error) {
    throw "Erro no banco ao buscar ordens de serviço: " + error;
  }
};

const addOrdemServicoDB = async (descricaoProblema, veiculoId) => {
  try {
    const novaOrdem = await prisma.ordemServico.create({
      data: {
        descricaoProblema,
        veiculoId,
      },
      include: {
        veiculo: true,
      },
    });

    return new OrdemServico(
      novaOrdem.id,
      novaOrdem.descricaoProblema,
      novaOrdem.statusReparacao,
      novaOrdem.dataEntrada,
      novaOrdem.veiculoId,
      novaOrdem.veiculo,
    );
  } catch (error) {
    throw "Erro ao inserir ordem de serviço no banco: " + error;
  }
};

const updateOrdemServicoDB = async (
  id,
  descricaoProblema,
  statusReparacao,
  veiculoId,
) => {
  try {
    const ordemAtualizada = await prisma.ordemServico.update({
      where: { id: parseInt(id) },
      data: {
        descricaoProblema,
        statusReparacao,
        veiculoId: parseInt(veiculoId),
      },
      include: {
        veiculo: {
          include: { cliente: true },
        },
      },
    });
    return ordemAtualizada;
  } catch (error) {
    throw "Erro ao atualizar a ordem de serviço: " + error;
  }
};

const deleteOrdemServicoDB = async (id) => {
  try {
    const ordemEliminada = await prisma.ordemServico.delete({
      where: { id: parseInt(id) },
    });
    return ordemEliminada;
  } catch (error) {
    throw "Erro ao apagar a ordem de serviço: " + error;
  }
};

module.exports = {
  getOrdensServicoDB,
  addOrdemServicoDB,
  updateOrdemServicoDB,
  deleteOrdemServicoDB,
};
