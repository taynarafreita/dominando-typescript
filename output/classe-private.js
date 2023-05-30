"use strict";
class Banco {
    cofreQtd = 10000;
    debitarCofre(quantidade) {
        if (this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade;
            return this.cofreQtd;
        }
        else {
            return "O cofre não possui a quantidade requisitada.";
        }
    }
    sacarDoCaixa(quantidade) {
        return this.debitarCofre(quantidade);
    }
    sacarDoCaixaEletronico(quantidade) {
        return this.debitarCofre(quantidade);
    }
}
class Banco24Horas extends Banco {
    sacar(qtd) {
        return this.sacarDoCaixa(qtd);
    }
}
const nubank = new Banco();
const banco24Horas = new Banco24Horas();
console.log(nubank.sacarDoCaixaEletronico(500));
console.log(banco24Horas.sacar(2500));
//# sourceMappingURL=classe-private.js.map