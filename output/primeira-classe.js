"use strict";
class Pessoa {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`;
    }
}
const ronaldo = new Pessoa("Ronaldo", 30, 1.85);
const taynara = new Pessoa("Taynara", 24, 1.58);
const robson = new Pessoa("Robson", 25, 1.70);
console.log(ronaldo.toString());
console.log(taynara.toString());
console.log("" + robson);
//# sourceMappingURL=primeira-classe.js.map