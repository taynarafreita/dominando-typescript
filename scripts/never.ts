function showError(message: string): never {
    throw new Error(message)
}

console.log(showError("Algo deu errado"))

let n = 0

function loopInfinito(): never {
    while(true) {
        console.log(n++)
    }
}

loopInfinito()

//duas situações que são do tipo never, erros e loop infinito, pois eles não retornam nada nunca.