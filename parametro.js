//parametros de função


function soma(numero1,numero2) {
    return numero1+numero2
}
console.log(soma(19,35))
console.log(soma(19,88))

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome}, tenho ${idade} anos`
}
//console.log(nomeIdade('Guilherme', 23))

function multiplica (numero1,numero2,numero3)  {
    return numero1*numero2*numero3
}
console.log(multiplica(18,39,55))

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')