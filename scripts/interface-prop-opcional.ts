interface IProduto {
    nome: string
    preco: number
    descricao?: string
    dataValidade: Date
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 2000,
    descricao: "Meu notebook superpotente",
    dataValidade: new Date(2023, 11, 1)
}

console.log(produtoDados)