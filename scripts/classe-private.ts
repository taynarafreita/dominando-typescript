class Banco {
    private cofreQtd: number = 10000;

    private debitarCofre(quantidade: number): number | string {

        if(this.cofreQtd >= quantidade) {
            this.cofreQtd -= quantidade

            return this.cofreQtd

        } else {
            return "O cofre não possui a quantidade requisitada."
        }
    }

    protected sacarDoCaixa(quantidade: number) {
        
        return this.debitarCofre(quantidade)
    }

    public sacarDoCaixaEletronico(quantidade: number) {
        return this.debitarCofre(quantidade)
    }
    
}

class Banco24Horas extends Banco {

    sacar(qtd: number) {
        return this.sacarDoCaixa(qtd)
    }
}

const nubank = new Banco()
const banco24Horas = new Banco24Horas()

console.log(nubank.sacarDoCaixaEletronico(500))
console.log(banco24Horas.sacar(2500))