let resultado: unknown

resultado = {
    sucesso: true
}

resultado = "Deu tudo certo. Ok!"
resultado = 200

console.log("=================")

const informacao: any = 150
const informacaoDesconhecida: unknown = 250

const primeiroNumero: number = informacao
//const segundoNumero: number = informacaoDesconhecida
// unknown não é possivel associar para outro tipo, já o any sim
