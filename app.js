const Arvore = require("./arvore")

const arvore = new Arvore(2, 2)
arvore.minimax(arvore.raiz, true)
console.log(JSON.stringify(arvore.raiz,null,'\t'))

