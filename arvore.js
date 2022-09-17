const Nodo = require("./nodo")

class Arvore {
  
  constructor(altura, quantFilhos) {
    this.raiz = new Nodo(parseInt(Math.random() * 100))
    this.geraArvore (this.raiz, altura, quantFilhos)
  }

  geraArvore (nodo, altura, quantFilhos) {
    if (altura > 0) {
      for (let i = 0; i < quantFilhos; i ++) {
        const novoNode = new Nodo(parseInt(Math.random() * 100))
        if ( altura - 1 === 0)
          novoNode.utilidade = parseInt(Math.random() * 100)
        nodo.filhos.push(novoNode)
        this.geraArvore (novoNode, altura - 1, quantFilhos)
      }
    }
  }

  percorreEmProfundidade (nodo) {
    console.log(nodo.valor)
    for (let f of nodo.filhos){
      this.percorreEmProfundidade (f)
    }
  }

  minimax (nodo, maximiza) {
    for (let f of nodo.filhos){
      let utilidade = this.minimax (f, !maximiza)
      if (!nodo.utilidade ||
        (nodo.utilidade && 
          ((maximiza && utilidade > nodo.utilidade) || 
          (!maximiza && utilidade < nodo.utilidade))
        ))
        nodo.utilidade = utilidade
    }
    return nodo.utilidade
  }
}

module.exports = Arvore