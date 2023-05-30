class Pessoa {
    nome: string
    idade: number
    altura: number

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    toString(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`
    }

}

const ronaldo = new Pessoa("Ronaldo", 30, 1.85)
const taynara = new Pessoa("Taynara", 24, 1.58)
const robson = new Pessoa("Robson", 25, 1.70)



console.log(ronaldo.toString())
console.log(taynara.toString())
console.log("" + robson)
