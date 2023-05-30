interface Modelo {
    id: number
    created_at: number
    updated_at: number
}

interface IPessoa extends Modelo {
    nome: string
    idade?: number
}

interface IUsuario extends IPessoa {
    email: string
    senha: string
}

const joao: IUsuario = {
    email: "joao@hcode.com.br",
    id: 1,
    nome: "João",
    senha: "123456",
    idade: 30,
    created_at: new Date().getTime(),
    updated_at: new Date().getTime()
}

console.log(joao)