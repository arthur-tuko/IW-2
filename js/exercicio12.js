alert("validação de nota!!")
let notav

while(true){
    notav = Number(prompt("Digite um número entre 0 e 10 "))
    if(notav > 0 && notav < 10){
        console.log("Nota valida")
        break
    }else{
        console.log("Nota invalida")
    }     
}