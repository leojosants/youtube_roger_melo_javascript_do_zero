const numeros = [10, 20, 30, 40, 50];
const somaNumerosSemFOR = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
let somaNumerosComFOR = 0;

console.log('Elementos do array........:', numeros);
console.log('Tamanho do array..........:', numeros.length);

for (let i = 0; i < numeros.length; i++) {
    somaNumerosComFOR += numeros[i];
}

numeros.push(6);

console.log('Elementos do array........:', numeros);
console.log('Tamanho do array..........:', numeros.length);

console.log('Soma dos números sem FOR..:', somaNumerosSemFOR);
console.log('Soma dos números com FOR..:', somaNumerosComFOR);