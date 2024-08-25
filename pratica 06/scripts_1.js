///Problema 1: Crie uma função com dois parâmetros, um inteiro e um booleano (True or False), que determina se uma pessoa pode dirigir com base na idade e se ela tem ou não carteira de motorista./

const idade = 19;
const carteira = true;

function podeDirigir(idade, carteira){
    if (idade >= 18){
        if (carteira == true){
            return true
        }   
    }
    return false;
}


if (podeDirigir(idade,carteira)){
    console.log("Pode dirigir.");
} else{
    console.log("Não pode dirigir");
}
