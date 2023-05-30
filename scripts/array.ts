const filmesCategorias: (string[] | number[]) = ["Comédia", "Drama", "Romance", "Aventura"]
//para fazer array misturando tipos, precisa colocá-los entre parênteses e para aceitar um array de cada tipo não precisa dos parênteses.

const filmesAnos: Array<number | string> = []

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano)
}

console.log(filmesAnos)
