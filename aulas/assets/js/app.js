/* 
    const getCarSales1 = (car) => {
        const cars = {
            strada: 50_000,
            onix: 70_000,
            polo: 56_000,
        };
        return cars[car] || `Não há informações do carro '${car}'`;
    };

    const getCarSales2 = (car) => {
        if (car === 'strada') {
            return 50_000;
        }

        if (car === 'onix') {
            return 70_000;
        }

        if (car === 'polo') {
            return 56_000;
        }

        return `Não há informações do carro '${car}'`;
    };

    console.log(getCarSales1('onix'));
    console.log(getCarSales1('fusca'));
    console.log(getCarSales2('onix'));
    console.log(getCarSales2('fusca'));
*/

/* 
    const newProp = 'Prop2';

    const props = {
        prop1: 'value 1',
        [newProp]: 'value 2',
    };

    console.log(props);
*/

const getObj = (newProp) => {
    return {
        prop1: 'value 1',
        // newProp: 'value 2',
        [newProp]: 'value 2',
    };
};

const newProp = 'prop 2';
const obj = getObj(newProp);

console.log('obj:', obj);