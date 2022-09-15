//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function nome(nome) {
    console.log(`Olá ${nome}`)
}
nome("Alexandre")

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

function conta(conta, conta) {
    const tabuada = []
    for (let i of tabuada)
   tabuada.push(conta * (conta[i-1]))
    return tabuada
}
conta[6]
conta[01, 02, 03, 04, 05, 06, 07, 08, 09, 10]
console.log(conta(tabuada))

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

//Nome
const nome1 = () => `Olá, Alexandre`
console.log(nome1())

//Tabuada

const tabuada1 = (numeros) => {
    let tabuadaDeSeis = []
    for (let i of numeros)
        tabuadaDeSeis.push((numeros[i - 1]) * 6)
    return tabuadaDeSeis
}
const tabuadaSeis = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10]
console.log(`Tabuada do 6: ${tabuada1(tabuadaSeis)}`)

