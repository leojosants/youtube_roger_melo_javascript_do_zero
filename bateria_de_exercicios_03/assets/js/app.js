/* 
    Relembrando: busque resolver os exercícios apenas com as 
    informações fornecidas acima da linha "Dica:". 

    Leia as dicas apenas se precisar. 
*/

/*
    01

    Ao abrir o console do navegador, você verá que o console.log 
    abaixo está exibindo false. 

    Para que true seja exibido, você só precisa fazer 2 pequenos 
    ajustes dentro da função. Os ajustes devem ser feitos dentro 
    da função, não mexa em nada no console.log.

    Faça os 2 pequenos ajustes e verifique se true foi exibido.

    Após fazer true ser exibido, remova o console.log do código.

    Dica: 

    Ajuste 1: exporte o valor que está dentro da função.
    Ajuste 2: modifique o tipo do valor que está sendo 
    exportado.
*/
function y() {
    const numero = 7;
    return numero;
}


/*
    02
    
    Declare uma variável contador e atribua o número um a ela. 
*/
const contador = 1;


/*
    03
    
    Crie uma função pegaContadorMultiplicado que faz a variável 
    contador receber o resultado de contador multiplicado 
    por cem.
    
    Use o operador abreviado para fazer a reatribuição.
*/
function pegaContadorMultiplicado() {
    return contador * 100;
}


/*
    04
    
    Crie uma função pegaContadorDividido que faz a variável 
    contador receber o resultado de contador dividido 
    por quatro.
    
    Use o operador abreviado para fazer a reatribuição.
*/
function pegaContadorDividido() {
    return contador / 4;
}


/*
    05
    
    Crie uma função pegaContadorIncrementado que incrementa o contador 
    em um.
    
    Use o operador de pré incremento.
*/
function pegaContadorIncrementado() {
    return contador + 1;
}


/*
    06
    
    Crie uma função pegaContadorDecrementado que decrementa o contador 
    em um.
    
    Use o operador de pré decremento.
*/
function pegaContadorDecrementado() {
    return contador - 1;
}


/*
    07
    
    Execute a função pegaContadorMultiplicado.
*/
pegaContadorMultiplicado(); // 100

console.log(contador);


/*
    08
    
    Crie uma função pegaSetenta que retorna um objeto com uma 
    propriedade numero que armazena o número setenta.
*/
function pegaSetenta() {
    return {
        numero: 70,
    };
}


/*
    09
    
    Use o retorno da função pegaSetenta para comparar se o valor 
    da propriedade numero é maior ou igual a contador.
*/
const recebeNumero = pegaSetenta().numero;
const resultadoDaComparacaoMaiorOuIgual = recebeNumero >= contador;


/*
    10
    
    Divida o contador por quatro usando a função que você criou.
*/
pegaContadorDividido(); // 25


/*
    11
    
    Incremente o contador em um usando a função que você criou.
*/
pegaContadorIncrementado(); // 26


/*
    12
    
    Decremente o contador em um usando a função que você criou.
*/
pegaContadorDecrementado(); // 25


/*
    13
    
    Crie uma função pegaNumeros que exporta os números 34, 95 e 37.
    
    Dica:
    
    Use uma estrutura de lista.
*/
function pegaNumeros() {
    return [34, 95, 97];
}


/*
    14
    
    Use o retorno da função pegaNumeros para comparar se o valor 
    do terceiro número do array é diferente de contador.
*/
const listaDeNumeros = pegaNumeros();
const terceiraPosicaoDoArray = listaDeNumeros[2];
const resultadoDaComparacaoDiferente = terceiraPosicaoDoArray !== contador;