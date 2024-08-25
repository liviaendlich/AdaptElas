//Problema 4: Crie uma função que recebe um número como parâmetro e decrementa esse número de 1 em 1.

const n = 5;

function decremento(n){
    while(n>0){
        console.log(n-1);
        n = n-1;
    }
}

decremento(n)