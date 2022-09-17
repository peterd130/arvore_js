const Arvore = require("./arvore")

const arvore = new Arvore(3, 2)

arvore.podaMinimax(arvore.raiz, true, undefined)
console.log(JSON.stringify(arvore.raiz,null,'\t'))

