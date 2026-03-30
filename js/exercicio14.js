alert("Caixa eletrônico")
let valor = Number(prompt("Digite o valor:"))

let n100 = Math.floor(valor / 100)
valor = valor % 100

let n50 = Math.floor(valor / 50)
valor = valor % 50

let n20 = Math.floor(valor / 20)
valor = valor % 20

let n10 = Math.floor(valor / 10)
valor = valor % 10

let n5 = Math.floor(valor / 5)
valor = valor % 5

let n2 = Math.floor(valor / 2)
valor = valor % 2

let n1 = valor

console.log(n100 + " nota(s) de 100")
console.log(n50 + " nota(s) de 50")
console.log(n20 + " nota(s) de 20")
console.log(n10 + " nota(s) de 10")
console.log(n5 + " nota(s) de 5")
console.log(n2 + " nota(s) de 2")
console.log(n1 + " nota(s) de 1")