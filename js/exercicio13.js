alert("Digite suas notas e descobrirá se foi aprovado ou não!!")
let nota1 = Number(prompt ("Digite a primeira nota:"))
let nota2 = Number(prompt ("Digite a segunda nota:"))
let nota3 = Number(prompt ("Digite a terceira nota:"))

let somam = (nota1 + nota2 + nota3) 
let media1 = somam / 3
console.log("A sua média é: "+media1)

if(media1 >= 7){
    console.log("Parabéns, você foi aprovado!!")
}else{
    console.log("Descupe, mas você foi reprovado")
}
