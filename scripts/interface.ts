interface IEndereco {
    logradouro: string
    numero: number
    bairro: string
    cidade: string
}

let endereco: IEndereco

//let endereco: {
//    logradouro: string,
//    numero: number,
//    bairro: string,
//    cidade: string
//}

endereco = {
    logradouro: "Rua Itajuíbe",
    numero: 1621,
    bairro: "Itaim Paulista",
    cidade: "São Paulo" 
}