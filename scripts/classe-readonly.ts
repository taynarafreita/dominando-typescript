class Usuario {
    readonly id: string = "123"
    nome: string = "João"
    private senha: string = "123456"
    readonly dataCadastro: Date = new Date("2021-01-01")
}

const usuario = new Usuario()

console.log(usuario.id)