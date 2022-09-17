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
        nodo.adicionaFilho(novoNode)
        this.geraArvore (novoNode, altura - 1, quantFilhos)
      }
    }
  }

  buscaProfundidade () {
    
  }
}

module.exports = Arvore