//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
//SOMA
const conta = (num1, num2) => {
    return num1 + num2
}


//SUBTRAÇÃO
const conta1 = (num1, num2) => {
    return num1 - num2
}


//MULTIPLICAÇÃO
const conta2 = (num1, num2) => {
    return num1 * num2
}


//DIVISÃO
const conta3 = (num1, num2) => {
    return num1 / num2
}


//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações
let num1 = (Number(prompt("Digite um número")))
let num2 = (Number(prompt("Digite um número")))

console.log(`${num1} + ${num2} = ${(conta(num1, num2))}`)
console.log(`${num1} - ${num2} = ${(conta1(num1, num2))}`)
console.log(`${num1} * ${num2} = ${(conta2(num1, num2))}`)
console.log(`${num1} / ${num2} = ${(conta3(num1, num2))}`)