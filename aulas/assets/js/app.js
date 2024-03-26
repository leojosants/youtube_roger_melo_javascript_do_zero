/* operador && 
    const valorTruthy1 = 1;
    const valorFalsy0 = 0;

    // quando o valor a esquerda do && é um valor truthy, o valor a direita do && é retornado
    const resultado1 = valorTruthy1 && valorFalsy0;

    // quando o valor a esquerda do && é um valor falsy, o valor a esquerda do && é retornado
    const resultado2 = valorFalsy0 && valorTruthy1;

    console.log(resultado1);
    console.log(resultado2);
*/

/* operador || 
    const valorTruthy1 = 1;
    const valorFalsy0 = 0;

    // quando o valor a esquerda do || é um valor truthy, o valor a esquerda do || é retornado
    const resultado1 = valorTruthy1 || valorFalsy0;

    // quando o valor a esquerda do || é um valor falsy, o valor a direita do || é retornado
    const resultado2 = valorFalsy0 || valorTruthy1;

    console.log(resultado1);
    console.log(resultado2);
*/

/* operador ternário - expressão: condição ? valor_1 : valor_2 
    const x = 7;
    const y = 7;

    console.log('x:', x);
    console.log('y:', y);

    const resultado1 = (x === y ? 'x é igual a y' : 'x é diferente de y');
    const resultado2 = (x !== y ? 'x é igual a y' : 'x não é diferente de y');

    console.log(resultado1);
    console.log(resultado2);
*/

/* operador ternário - expressão: condição ? valor_1 : valor_2 */
const pessoa = {
    nome: 'Leo',
    genero: 'Masculino',
};

// ternário
// const agradecimento = (pessoa.genero === 'Masculino' ? 'Obrigad(o)' : 'Obrigad(a)');

// if tradicional
let agradecimento;

if (pessoa.genero === 'Masculino') {
    agradecimento = 'Obrigad(o)';
}
else {
    agradecimento = 'Obrigad(a)';
}

console.log(agradecimento);