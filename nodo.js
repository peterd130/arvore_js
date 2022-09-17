class Nodo {
  
  constructor(valor) {
    this.valor = valor
    this.filhos = []
  }

  adicionaFilho (filho) {
    this.filhos.push(filho)
  }
}

module.exports = Nodo