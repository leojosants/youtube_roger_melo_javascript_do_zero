/*
    let numero = 1;

    function incrementa() {
        return numero++;
    }

    console.log(numero);
    console.log(incrementa());
    console.log(numero);
*/

/*
    function x() {
        const minhaConst = 'valor';
        const frase = `A const 'minhaConst' tem o valor: ${minhaConst}`;
        console.log(frase);
    }

    x();
*/

function pegarNome() {
    const nome = 'Leonardo'; // escopo local
    return nome;
}

const nome = pegarNome(); // escobo global

console.log('Nome:', nome);