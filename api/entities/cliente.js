// entities/cliente.js
class Cliente {
  // Construtor para inicializar a classe com os dados vindos do banco [00:02:54]
  constructor(id, nome, contato) {
    this.id = id;
    this.nome = nome;
    this.contato = contato;
  }
}

module.exports = Cliente; // Exporta a classe [00:03:03]
