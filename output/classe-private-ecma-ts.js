"use strict";
class Documento {
    valor = "123654789-01";
    #numero = 35;
    mostrarDocumento() {
        return this.#numero;
    }
}
class CNPJ extends Documento {
    #numero = 50;
    mostrarCNPJ() {
        return this.#numero;
    }
}
const rg = new Documento();
console.log(rg.mostrarDocumento());
const cnpj = new CNPJ();
console.log(cnpj.mostrarCNPJ());
//# sourceMappingURL=classe-private-ecma-ts.js.map