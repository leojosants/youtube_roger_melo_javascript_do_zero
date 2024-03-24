/*
Durante a resolução desta bateria de exercícios você verá erros 
no console do navegador. 

Fazer os erros desaparecerem é parte da resolução dos exercícios. 

Importante: ainda que haja um erro no console do navegador, você pode escrever e executar seu código normalmente antes da linha do erro. 

Exemplo: se a mensagem do erro no console diz que o erro está na linha 81, você pode ir resolvendo os exercícios e escrever seu código acima da linha 81 normalmente, ok? =)
*/

/*
01

Vincule este arquivo (app.js) ao index.html desta mesma pasta.
*/
// <script src="./assets/js/app.js" defer></script>

/*
02

Conserte o nome da let abaixo.
*/
// numeroImpar = 7
let numeroImpar = 7

/* 
03

Faça a let acima receber o número 3. 

Não modifique a declaração da let. 

O código que você escrever deve estar abaixo deste comentário.
*/
numeroImpar = 3;

/*
04

Faça a const abaixo ser exibida no console do navegador.

Após ver o valor da const no console, remova do código o comando 
que exibiu a const no console.
*/
const meExiba = 123
// console.log(`Conteúdo da constante 'meExiba': ${meExiba}`);

/*
05

A const abaixo foi nomeada como uma abreviação.

Apenas lendo a declaração dela, você sabe o que a abreviação "np" 
significa?

Provavelmente, não. Certo?

O objetivo deste exercício é exatamente este. Deixar claro que 
abreviações podem prejudicar o entendimento de um código. 

O nome correto da const (sem abreviação) será revelado na próxima 
aula. 
*/
const np = 2

/* 
06

O código abaixo está lançando um erro no console. 

O que você pode ajustar na declaração de "videoGame" para que o 
erro não seja mais exibido?

Leia a mensagem do erro no console. Ela já está te dando a dica 
do que deve ser ajustado.

Dica: o ajuste deve ser feito apenas na linha da declaração de 
"videoGame". 
*/
// const videoGame = 'Xbox'
let videoGame = 'Xbox'
videoGame = 'Playstation'

/*
07

Apenas lendo o código abaixo, você consegue saber qual valor a 
const "final" armazenou?

Após calcular o resultado em sua mente, exiba a const "final" no 
console para conferir se o valor que você imaginou está certo. 
*/
const x = 0
let y = 3
let w = x
w = 15 - y
y = 5
const final = x + y + 7 + w
console.log(`Conteúdo da constante 'final': ${final}`);

/*
08

Conserte a declaração da variável abaixo. 
*/
// umNumeroQualquer = 9
let umNumeroQualquer = 9

/*
09

Abaixo da declaração da const "curso", declare uma nova constante 
chamada "sigla".

O valor desta nova constante deve ser "CJRM". 

Não insira manualmente nenhum dos caracteres da sigla "CJRM".

Isto é, você não deve inserir diretamente o caractere "C", por 
exemplo.

O valor da constante "sigla" deve ser gerado através do valor 
que a const "curso" armazena.

Após gerar o valor da constante "sigla", exiba-a no console para 
checar se você realmente gerou o valor certo ("CJRM"). 

Após ver o valor no console, remova o console.log() do seu código.

Leia a dica abaixo apenas se não conseguir fazer o exercício com 
as informações acima. 

Dica: use concatenação e sintaxe de acesso de caractere de string 
para gerar o valor da constante "sigla".
*/
const curso = 'Curso de JavaScript Roger Melo'
const sigla = curso[0] + curso[9] + curso[20] + curso[26];
console.log(`Conteúdo da constante 'sigla': ${sigla}`);

/*
10

Conserte o que está errado na string abaixo.
*/
const likes = 197
// const mensagem = 'Sua foto recebeu ${likes} likes'
const mensagem = `Sua foto recebeu ${likes} likes`

/*
11

Crie uma const "serie".

Esta const deve armazenar um objeto com as seguintes propriedades:

- nome, sendo o valor do tipo string
- temporadas, sendo o valor do tipo number
- episodios, sendo o valor do tipo number
- emissora, sendo o valor do tipo string

Os valores das propriedades acima ficam ao seu critério. Use uma 
série que você curta =)
*/
const serie = {
    nome: 'Black List',
    temporadas: '5',
    episodios: '30',
    emissora: 'Netflix',
};

/*
12

Obtenha o valor de cada propriedade do objeto "serie" e exiba-o 
no console.
*/
const nomeSerie = serie.nome;
const temporadasSerie = serie.temporadas;
const episodiosSerie = serie.episodios;
const emissoraSerie = serie.emissora;
console.log(`Nome da série......: ${nomeSerie}`);
console.log(`Temporadas da série: ${temporadasSerie}`);
console.log(`Episódios da série.: ${episodiosSerie}`);
console.log(`Emissora da série..: ${emissoraSerie}`);

/*
13

Sobrescreva o valor de cada propriedade do objeto.

Após sobrescrever, exiba o novo valor de cada uma no console.
*/
serie.nome = 'O Protetor';
serie.temporadas = '9';
serie.episodios = '13';
serie.emissora = 'HBO';
const novoNomeSerie = serie.nome;
const novaTemporadasSerie = serie.temporadas;
const novosEpisodiosSerie = serie.episodios;
const novaEmissoraSerie = serie.emissora;
console.log(`Novo nome da série.......: ${novoNomeSerie}`);
console.log(`Novas temporadas da série: ${novaTemporadasSerie}`);
console.log(`Novos episódios da série.: ${novosEpisodiosSerie}`);
console.log(`Nova emissora da série...: ${novaEmissoraSerie}`);