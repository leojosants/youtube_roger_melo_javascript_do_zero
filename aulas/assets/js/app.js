/*
    const obj = {
        propriedade: 'valor',
        metodo: function (x) {
            return x;
        },
    };

    console.log(obj.metodo(4));
*/

/*
    const obj = {
        propriedade: 'valor',
        metodo(x) {
            return x;
        },
    };

    console.log(obj.metodo(4));
*/

/*
    const obj = {
        propriedade: 'valor',
        metodo(x) {
            this.propriedade = x;
        },
    };

    obj.metodo(3);

    console.log(obj.propriedade);
*/

/*
    const obj = {
        propriedade: 'valor',
        metodo: (x) => {
            console.log(this);
            this.propriedade = x;
        },
    };

    obj.metodo(3);

    console.log(obj.propriedade);
*/

const obj = {
    propriedade:'valor',
    propriedade2:'valor2',
};

const obj2 = {
    ...obj,
    propriedade2:1
};

console.log('obj...:',obj);
console.log('obj2..:',obj2);