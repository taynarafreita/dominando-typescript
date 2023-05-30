interface MeuUsuario {
    nome: string
    email: string
    telefone: string
}

abstract class Notificacao {
    
    abstract enviar(usuario: MeuUsuario): boolean
}

class Email extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`)

        return true
    }
}

class SMS extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`)

        return true
    }
}

new Email().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
})

new SMS().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
})
