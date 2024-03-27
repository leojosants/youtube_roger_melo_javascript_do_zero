/*
    const numeros = [10, 20, 30];

    console.log('Números..:', numeros);
    console.log('10 existe?', numeros.includes(10));
    console.log('20 existe?', numeros.includes(20));
    console.log('30 existe?', numeros.includes(30));
    console.log('40 existe?', numeros.includes(40));
*/

/*
    const mensagem = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tempora commodi voluptatem quidem corrupti neque autem non amet, culpa provident sapiente aperiam voluptate ipsum asperiores natus quibusdam fugit atque magni!`;

    console.log('Mensagem......:', mensagem);
    console.log(`'fugit' existe?`, mensagem.includes('fugit'));
    console.log(`'teste' existe?`, mensagem.includes('teste'));
*/

const strings = ['1', '1', '2'];

console.log('Strings:', strings);

// checar se todos os itens do array correponde a uma comparação
const resultado = strings.every((string) => string === '1');

console.log(`Todos os elementos do array 'strings' são iguais a '1'?`, resultado);