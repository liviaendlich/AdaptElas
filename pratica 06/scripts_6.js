/*Problema 6: Crie uma função para calcular o valor total de um pedido em uma lanchonete.A função deve receber o valor total das compras e verificar se o valor é superior a R$200,00.Se for, o cliente receberá um desconto de 10 % no total.Caso contrário, não haverá desconto.
A função deve:
    1. Solicitar ao usuário o valor total das compras(Você pode declarar uma variável já contendo esse valor).
    2. Calcular o desconto se o valor total exceder R$200,00.
    3. Exibir o valor total com o desconto(se aplicável) e o valor do desconto.
*/

const valorInicial = 250;


function comDesconto(valor){
    if (valor > 200){
        const desconto = valor*0.1
        const valorFinal= valor - desconto;
        console.log(`Valor total com desconto: R${valorFinal.toFixed(2) }`)
        console.log(`Desconto: R${desconto.toFixed(2) }`)
    } else{
        console.log(`Valor Total: R${valor.toFixed(2) }`);
        console.log("Valor não elegivel para desconto")
    }
}

comDesconto(valorInicial)
