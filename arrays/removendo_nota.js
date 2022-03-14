const notas = [10, 6.5, 8, 7.5, 5]
//o comando pop remove o último número da length
notas.pop()
console.log(notas)

let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length


console.log(`Sua média do semestre foi de ${media}`)

