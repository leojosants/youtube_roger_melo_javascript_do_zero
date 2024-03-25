/*
    const listaCompras = ['abacaxi', 'maças', 'torradas'];

    console.log(listaCompras);

    console.log(listaCompras[0]);
    console.log(listaCompras[1]);
    console.log(listaCompras[2]);
    console.log(listaCompras[1 + 1]);

    listaCompras[0] = 'limão';

    console.log(listaCompras);
*/

/*
    const compras = [];

    console.log(compras);

    compras[0] = 'abacaxi';

    console.log(compras);
*/

/*
    const jogo = {
        nome: 'The Last of Us Part II',
        ano: 2020,
    }

    const informacoesJogo = ['The Last of Us Part II', 2020];

    console.log(jogo.ano);
    console.log(informacoesJogo[1]);
*/

const series = [
    {
        nome: 'Chernobyl',
        ano: 2019,
    },
    {
        nome: 'Braking Bad',
        ano: 2009,
    },
];

series[1].ano = 2010;
series[0].emissora = 'HBO';
series[1].emissora = 'Max';

console.log(series);
console.log(series[0].nome);
console.log(series[0].ano);
console.log(series[0].emissora);
console.log(series[0]);
console.log(series[1]);
console.log(series[1].nome);
console.log(series[1].ano);
console.log(series[1].emissora);