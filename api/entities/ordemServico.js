class OrdemServico {
  constructor(
    id,
    descricaoProblema,
    statusReparacao,
    dataEntrada,
    veiculoId,
    veiculo,
  ) {
    this.id = id;
    this.descricaoProblema = descricaoProblema;
    this.statusReparacao = statusReparacao;
    this.dataEntrada = dataEntrada;
    this.veiculoId = veiculoId;
    this.veiculo = veiculo;
  }
}

module.exports = OrdemServico;
