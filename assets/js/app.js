/*
    tipos primitivos
        - number
        - null
        - undefined
        - boolean
        - string
        - bigint
        - symbol
        - objeto
            - objetos literais
            - arrays
            - funções
*/

const microfone = {
    cor: 'preto',
    marca: 'Fifine',
    preco: 397.97,
};

const corMicrofone = microfone.cor;
const marcaMicrofone = microfone.marca;
const precoMicrofone = microfone.preco;
const novoPrecoMicrofone = (microfone.preco - 100);

console.log(novoPrecoMicrofone);