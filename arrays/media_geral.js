const salaJS = [7,8,8,7,10]
const salaPython = [5,3,8,9]
const salaJava = [8,9,2,1]
//reduce tem sempre dois parâmetros o acumulador e o atual
function mediaSala (notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum,atual) => atual+acum,0)
    return somaDasNotas/notasDaSala.length
}
console.log(`Média da sala de JavaScript${mediaSala(salaJS)}`)
console.log(`Média da sala de JavaScript${mediaSala(salaPython)}`)
console.log(`Média da sala de JavaScript${mediaSala(salaJava)}`)

const notas=[10,6.5,8,7]
const media = notas.reduce((acum, atual)=>atual+acum,0) /notas.length
console.log(media)