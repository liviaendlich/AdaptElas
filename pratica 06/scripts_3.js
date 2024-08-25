//Problema 3: Crie uma função que recebe um número (x) como parâmetro e determine se ele é impar ou par.A função deve exibir as seguintes mensagens em seus devidos casos.

const x = 5;

function parImpar(x){
    if (x%2 == 0){
        console.log(`O numero ${x} é par.`)
    }else{
        console.log(`O numero ${x} é impar.`)
    }

}

parImpar(x)