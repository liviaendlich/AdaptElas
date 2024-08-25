//Problema 2: Crie uma função que contém dois números inteiros como parâmetros (a, b) e determine qual deles é o maior.A função deve retornar uma mensagem dizendo qual número é o maior ou se ambos são iguais.A função deve exibir as seguintes mensagens em seus devidos casos:

const a = 5
const b = 2

function nMaior(a, b) {
    if (a > b) {
        console.log(`O número ${a} é maior que ${b}`);
    } else if (a < b) {
        console.log(`O número ${a} é menor que ${b}`);
    } else {
        console.log("Os dois números são iguais.");
    }
}

nMaior(a,b);