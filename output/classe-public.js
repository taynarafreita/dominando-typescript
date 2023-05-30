"use strict";
class Veiculo {
    cor;
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo("branco");
carro.cor = "preto";
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
//# sourceMappingURL=classe-public.js.map