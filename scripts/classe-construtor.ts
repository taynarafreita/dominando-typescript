class Pedido {

    constructor(
        private produto: string,
        protected valorTotal: number,
        public previsaoEntrega: Date,
    ) {}
}

const meuPedido = new Pedido("TV 64 polegadas", 2000, new Date("2021-05-01"))

console.log(meuPedido)

// quando os nomes dos atributos vão ser os mesmos do construtor, é possivel deixá-los todos no construtor apenas, necessitando
//para esse caso, colocar se o atributo é publico, privado, etc.
