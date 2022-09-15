//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function conta(num1, num2) {
    console.log(num1 + num2)
}
conta(7, 8)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function conta1(num1, num2) {
    if (num1 >= num2)
        console.log(`${num1} é maior que ${num2}`)
    else {
        console.log(`${num1} é menor que ${num2}`)
    }
}
conta1(30, 25)

//c) Uma função que receba um número e imprima se ele é par ou não
function numPar(num1) {
    if (num1 % 2 === 0) {
        console.log(`${num1} é par!`)
    } else {
        console.log(`${num1} é impar!`)
    }
}
numPar(Number(prompt("Digite um número")))

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

const a = ("Alexandre")
function imprimeString() {
}
console.log(a.length)
console.log(a.toLocaleUpperCase())