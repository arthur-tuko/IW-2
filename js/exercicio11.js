alert("Digite um número e verá o seu fatorial!!")
let numfat = prompt("Digite um número")
let fatorial = 1

for(let i = 1 ; i <= numfat; i++){ // i <= numfa(Repita enquanto i for menor ou igual ao número.) ; i++ (Significa aumentar 1 no valor de i a cada repetição.)
    fatorial = fatorial * i
}
console.log("O valor fatorial é:" + fatorial) 
