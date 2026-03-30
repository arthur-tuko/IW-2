alert("Login Simples")
let usuario = prompt("Digite o nome do usuário:")
let senha = prompt("Digite a senha:")

while (usuario != "yas" || senha != "0702") { // !=(diferente de) ||(ou)

    if (usuario != "yas") {
        alert("Usuário incorreto")
    }

    if (senha != "0702") {
        alert("Senha incorreta")
    }

    usuario = prompt("Digite o nome do usuário novamente:")
    senha = prompt("Digite a senha novamente:")
}
alert("Login realizado com sucesso!")