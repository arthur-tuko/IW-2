num = Number(prompt("Digite um número: "));
let soma = 0;

// 4. Loop para somar todos os números de 1 até n
for (let i = 1; i <= num; i++) {
    soma += i; // Adiciona o número atual (i) ao total da soma
}

// 5. Exibe o resultado
console.log(`A soma de 1 até ${num} é: ${soma}`);
alert(`A soma de 1 até ${num} é: ${soma}`);
