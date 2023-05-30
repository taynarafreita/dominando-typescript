"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email}...`);
        return true;
    }
}
class SMS extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuario ${usuario.telefone}...`);
        return true;
    }
}
new Email().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});
new SMS().enviar({
    nome: "Joao",
    email: "joao@hcode.com.br",
    telefone: "11912344321"
});
//# sourceMappingURL=classes-abstratas.js.map