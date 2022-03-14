function apresentar(nome) {
    return `meu nome é ${nome}`
}

function apresentarArrow(nome) {
    return `meu nome é  ${nome}`
}
apresentar('Guilherme')
//Outra forma de se fazer function
const soma = (num1,num2) => num1*num2
console.log(soma(18,19))

//Arrow function com + de 1 linha de instrução

const somaNumeros = (num1, num2) => {if (num1 || num2 >10) 
{return "Somente números de 1 a 9"}
else {return num1+num2}
}



// !==Operador maior ou igual que
//>=