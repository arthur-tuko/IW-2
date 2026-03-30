let numeroa = Math.floor(Math.random() * 10) + 1 
let palpite = prompt("Adivinhe o número de 1 a 10")

while(palpite != numeroa){

    if(palpite > numeroa){
        alert("O número é menor")
    }

    if(palpite < numeroa){
        alert("O número é maior")
    }

    palpite = prompt("Tente novamente")
}
alert("Parabéns! Você acertou!!")