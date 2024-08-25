//Problema 5: Crie uma função que receba uma string como parâmetro e determine o número de caracteres presentes.Considere um limite de 20 caracteres, a função deve exibir mensagens dizendo se esse limite foi ou não excedido.


const palavra = "Adapti";
const palavra2 = "AdaptiAdaptiAdaptiAdapti"

function comprimento(palavra){
    const comp = palavra.length; 
    if (comp > 20){
        console.log("O limite da palavra foi excedido.")
    } else{
        console.log("A palavra esta dentro do limite")
    }
}

comprimento(palavra);
comprimento(palavra2);