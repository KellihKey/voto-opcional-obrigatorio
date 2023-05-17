var idade = 25
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18 || idade >= 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
    }
} //Aula sobre variáveis aninhadas, é possível colocar variáveis dentro uma da outra