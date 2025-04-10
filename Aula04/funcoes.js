function ExibirMsg (msg) {
    console.log(msg)
}

ExibirMsg("Oi amiguinhos! Bom dia!")
ExibirMsg("Estou com sono")

function ExibirMsg2 (msg) {
    let mensagem = msg
    console.log("chegou na função", mensagem)
}

console.log(ExibirMsg2("Sou calvo!"))

//Função básica
function soma (n1, n2) {
    return n1 + n2
}

console.log(soma(2,6))

//Arrow funcion ou Função anônima
const Potencia = (n, p) => {
    return Math.pow(n,p)
}

console.log(potencia(4, 2))

/*Media >= 6,00 = Aprovado
* media < 6,00 || >= 4,00 = Recuperação
* media < 4,00 = Reprovado
*/

const media = (nota1, nota2) => {
    let notaFinal = (nota1 + nota2) / 2

    if (notaFinal < 4.00) {
        return "Reprovado"
    }

    if (notaFinal >= 6.00) {
        return "Aprovado"
    }

    return "Recuperação"
}

console.log(media(6,4))