alert("Soma de números positivos")
let numpos;
let somapos = 0 

while(true){
    numpos = Number(prompt("Digite um número:"));
    if(numpos <0){
        break
    }
    somapos = somapos + numpos;
}
alert("A soma dos números positivos é: " + somapos)
