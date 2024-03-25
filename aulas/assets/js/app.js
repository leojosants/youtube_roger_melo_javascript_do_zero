const serie = {
    nome: 'Game of Thrones',
    temporadas: 8,
};

// atribuição
serie.temporadas = 10;

// Uncaught TypeError: Assignment to constant variable.
// serie = 'filme';

// criação
serie.episodios = 73;

const frase = `
A série ${serie.nome} tem ${serie.temporadas} temporadas e ${serie.episodios} episódios.
`;

const serie2 = {};

serie2.nome = 'Game of Thrones';
serie2.episodios = 53;
serie2.temporadas = 6;

const pessoa = {
    nome: 'Leonardo',
    peso: 76,
    altura: 1.70,
    idade: 39,
}

console.log(frase);
console.log(serie2);