class Documento {

    private valor: string = "123654789-01" // TS
    #numero: number = 35 //ecma

    mostrarDocumento() {
        return this.#numero
    }

}

class CNPJ extends Documento {

    //private valor: string = "3923843943-01"
    #numero: number = 50 

    mostrarCNPJ() {
        return this.#numero
    }
}

const rg = new Documento() 

console.log(rg.mostrarDocumento())

const cnpj = new CNPJ()

console.log(cnpj.mostrarCNPJ())

//console.log("RG:" + rg.#numero)