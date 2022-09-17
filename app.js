const Arvore = require("./arvore")

const arvore = new Arvore(2, 2)

console.log(JSON.stringify(arvore.raiz,null,'\t'))

arvore.percorreEmProfundidade(arvore.raiz)

