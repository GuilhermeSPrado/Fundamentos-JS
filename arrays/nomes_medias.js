               //0
const nomes = ['João', 'Juliano','Ana', 'Caio']
               //0
const medias = [10,7,9,6]
//Listas com duas dimensões
                           //0    //1
let listaDeNotasEAlunos = [nomes, medias]
//Primeiro colchetes é para selecionar a lista e o segundo valor é para selecionar a posição de dentro dessa lista
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)

let idades = [30, 35, 28]
let nome = ["Ana", "Juliana", "Leonardo"]
let faculdade = [false, true, true]

let funcionarios = [nome,idades,faculdade]

console.log(`O funcionário(a) ${funcionarios[0][1]} que tem ${funcionarios[1][0]} anos, faz faculdade? ${funcionarios[2][0]}`)

