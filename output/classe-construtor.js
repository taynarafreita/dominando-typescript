"use strict";
class Pedido {
    produto;
    valorTotal;
    previsaoEntrega;
    constructor(produto, valorTotal, previsaoEntrega) {
        this.produto = produto;
        this.valorTotal = valorTotal;
        this.previsaoEntrega = previsaoEntrega;
    }
}
const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"));
console.log(meuPedido);
//# sourceMappingURL=classe-construtor.js.map