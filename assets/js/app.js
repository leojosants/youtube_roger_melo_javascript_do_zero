const anoAtual = 2024;
const anoNascimento = 1984;
const idade = anoAtual - anoNascimento;
const nome = 'Leonardo';

// aspas simples - ''
// const frase = 'Meu nome é ' + nome + ' e tenho ' + idade + ' anos.';

// aspas duplas - ""
// const frase = "Meu nome é " + nome + " e tenho " + idade + " anos.";

// template strings - ``
const frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

// escape de caracteres - \\
// const frase2 = "Ela disse \"Olá\"!";
const frase2 = `Ela disse "Olá"!`;

console.log(frase);
console.log(frase2);
console.log(nome[0]);