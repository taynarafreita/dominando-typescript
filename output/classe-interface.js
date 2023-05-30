"use strict";
class NotificacaoV2 {
}
class EmailV2 extends NotificacaoV2 {
    nome;
    email;
    constructor(usuario) {
        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
    }
    enviar() {
        console.log(`Enviando e-mail para o usuario ${this.email}...`);
        return true;
    }
}
class SMSV2 extends NotificacaoV2 {
    telefone;
    constructor(usuario) {
        super();
        this.telefone = usuario.telefone;
    }
    enviar() {
        console.log(`Enviando SMS para o usuario ${this.telefone}...`);
        return true;
    }
}
new EmailV2({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
}).enviar();
new SMSV2({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
}).enviar();
//# sourceMappingURL=classe-interface.js.map