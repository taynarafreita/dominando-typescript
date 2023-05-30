class Domicilio {

    cor: string
    endereco: object

    constructor(cor: string, endereco: object) {
        this.cor = cor
        this.endereco = endereco
    }


    tocarInferfone(): string {
        return "Interfone tocado!"
    }
}

class Casa extends Domicilio {

    entrarNaCasa() {
        return this.atenderInterfone("Oi, quem é?")
    }

    protected atenderInterfone(menssagem: string): string {
        return menssagem
    }
}

const casaDoHomer = new Casa("Rosa", {cidade: "Springfield"})

console.log(casaDoHomer.entrarNaCasa())