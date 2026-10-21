class Veiculo {
  constructor(id, placa, marca, modelo, clienteId, cliente) {
    this.id = id;
    this.placa = placa;
    this.marca = marca;
    this.modelo = modelo;
    this.clienteId = clienteId;
    this.cliente = cliente;
  }
}

module.exports = Veiculo;
