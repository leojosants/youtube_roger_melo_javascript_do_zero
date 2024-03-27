/* imutável
    const mes = ['janeiro'];

    console.log('Mês:', mes);
    console.log(mes[0][0].toLowerCase());
    console.log(mes[0][0] = 'J');
    console.log('Mês:', mes);

    mes[0] = 'Janeiro';

    console.log('Mês:', mes);
*/

/* imutável
    const mensagem = 'Eu sou Médico!';

    console.log('Mensagem.......:', mensagem);

    const novaMensagem = mensagem.replace('Médico', 'Desenvolvedor');

    console.log('Nova mensagem..:', novaMensagem);
    console.log('Mensagem.......:', mensagem);
*/

/* mutável
    const array = ['a', 'c', 'c'];

    console.log('Array:', array);

    array[1] = 'b';

    console.log('Array:', array);
*/

/* mutável
    const obj = {
        nome: 'Leo',
    };

    console.log('Obj:', obj);

    obj.nome = 'Leonardo';

    console.log('Obj:', obj);
*/

/* passagem de valor - valor 
    const x = {
        prop: 1,
    };

    const y = {
        prop: 1,
    };

    console.log('x......:', x);
    console.log('y......:', y);
    console.log('x === y:', x === y);
*/

/* passagem de valor - referência 
    const x1 = {
        prop: 1,
    };

    const y1 = x1;

    console.log('x1.......:', x1);
    console.log('y1.......:', y1);
    console.log('x1 === y1:', x1 === y1);

    y1.prop = 3;

    console.log('x1.......:', x1);
    console.log('y1.......:', y1);
*/

/* spread */
const x1 = {
    prop: 1,
}

const y1 = {
    ...x1,
    prop: 0,
    prop1: 1,
};

console.log('x1.........:', x1);
console.log('y1.........:', y1);
console.log('x1 === y1..:', x1 === y1);

y1.prop = 3;

console.log('x1.........:', x1);
console.log('y1.........:', y1);