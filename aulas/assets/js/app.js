/*
    const obj = {
        prop: 'x',
    };

    console.log('obj.prop:', obj.prop);

    const y = () => {
        obj.prop = 'y'
    };

    y();

    console.log('obj.prop:', obj.prop);
*/

/*
    const numeros = [1, 2, 3];
    let resultado = 0;

    console.log('Resultado:', resultado);

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }

    console.log('Resultado:', resultado);
*/

const numeros = [10, 20, 30];

numeros.forEach((item, index, array) => {
    console.log('Item...:', item);
    console.log('Index..:', index);
    console.log('Array..:', array);
    console.log('\n');
});