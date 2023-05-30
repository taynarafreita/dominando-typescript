"use strict";
class Domicilio {
    cor;
    endereco;
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInferfone() {
        return "Interfone tocado!";
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Oi, quem é?");
    }
    atenderInterfone(menssagem) {
        return menssagem;
    }
}
const casaDoHomer = new Casa("Rosa", { cidade: "Springfield" });
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe-protected.js.map