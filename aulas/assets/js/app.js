/* operador && - and 

    const x = 3;
    const y = 7;

    const resultado = (x === 3 && y === 7);

    console.log(resultado);
*/

/* operador || - or 

    const x = 3;
    const y = 7;

    const resultado = (x !== 3 || y === 7);

    console.log(resultado);
*/

/* estrutura condicional - if 

    const x = 3;
    const y = 7;
    let w = 0;

    if (x === 3 && y === 7) {
        w++;
    }
    
    console.log(w);
    */

/* estrutura condicional - else

    const x = 3;
    const y = 7;
    let w = 0;

    if (x === 3 && y === '7') {
        w++;
    }
    else {
        w--;
    }

    console.log(w);
*/

/* estrutura condicional - else if */

const x = 3;
const y = 7;
let w = 0;

if (x === 3 && y === '7') {
    w++;
}
else if (x === '3') {
    w = 5;
}
else {
    w = 9;
}

console.log(w);