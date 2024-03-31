/* 
    const obj = {
        nOme_dAChave_semPADrao: 'sssss',
    };

    console.log('obj:', obj);

    const pegaMensagem1 = ({ nOme_dAChave_semPADrao}) => `Chave recebida: ${nOme_dAChave_semPADrao}`;

    const pegaMensagem2 = ({ nOme_dAChave_semPADrao: nomeDaChavePadronizado }) => `Chave recebida renomeado: ${nomeDaChavePadronizado}`;

    console.log(pegaMensagem1(obj));
    console.log(pegaMensagem2(obj));

*/

/* 
    const config = {
        formatoModulo: 'esm',
        futuro: {
            v2Headers: true,
            v2Meta: true,
        },
    };

    const pegaMensagem = ({ futuro }) => `v2Meta é true? ${futuro.v2Meta === true}`;
    const mensagem = pegaMensagem(config);

    console.log(mensagem);
*/

/* 
    const arr = [
        5,
        (num) => num * 2,
    ];

    console.log(arr);

    // const numero = arr[0];
    // const dobrarFN = arr[1];
    const [numero, dobrarFN] = arr;

    console.log('numero:', numero);
    console.log('dobrarFN:', dobrarFN(4));
*/

/* 
    const pegaNomeCompleto = ([nome, sobrenome]) => `${nome} ${sobrenome}`;
    const arr = ['Leo', 'Santos'];
    const nomeCompleto = pegaNomeCompleto(arr);

    console.log('nomeCompleto:', nomeCompleto);
*/

/* 
    const getFullName = ([name, surname]) => `${name} ${surname}`;
    const arr = ['Leo', 'Santos'];
    const fullName = getFullName(arr);

    console.log('fullName:', fullName);
*/

/* 
    const props = {
        prop1: 'value 1',
    };

    const propName = 'prop';

    console.log('props:', props);
    console.log('propName:', propName);
    console.log('propName + 1:', props[propName + 1]);
*/

const getCarSales = (car) => {
    const cars = {
        strada: 50_000,
        onix: 70_000,
        polo: 56_000,
    };
    return cars[car] || `Não há informações do carro '${car}'`;
};

console.log(getCarSales('onix'));
console.log(getCarSales('fusca'));