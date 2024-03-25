/*
    const x = () => { };

    x();
*/

/*
    function pegaMensagem(nome) {
        return `Meu nome é ${nome}!`;
    }

    const pegaMensagem2 = (nome) => {
        return `Meu nome é ${nome}!`;
    }

    const pegaMensagem3 = (nome) => `Meu nome é ${nome}!`;

    const nome = 'Leonardo';
    const nome2 = 'Leo';
    const nome3 = 'João';

    console.log(pegaMensagem(nome));
    console.log(pegaMensagem2(nome2));
    console.log(pegaMensagem3(nome3));
*/

/*
    const pegaObj = (param1, param2) => {
        return {
            prop1: param1,
            prop2: param2,
        };
    }

    const pegaObj2 = (param1, param2) => ({ prop1: param1, prop2: param2 });

    console.log(pegaObj(1, 2));
    console.log(pegaObj2(1, 2));
*/

const pegaMensagem = (nome) => `Meu nome é ${nome}!`;
const pegaMensagem2 = nome => `Meu nome é ${nome}!`;
const nome = 'Leo';

console.log(pegaMensagem(nome));
console.log(pegaMensagem2(nome));