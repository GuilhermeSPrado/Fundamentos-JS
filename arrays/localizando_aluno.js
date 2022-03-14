
const nomes = ['João', 'Juliano','Ana', 'Caio']
const mediaAlunos = [10,8,6,4]

let listaDeNotasEAlunos = [nomes, mediaAlunos]


const exibeNomeNota = (nomeAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeAluno)) {let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);  
        return listaDeNotasEAlunos[0][indice]+' Sua média é '+listaDeNotasEAlunos[1][indice]}
        else {return 'Aluno não encontrado'}

}

console.log(exibeNomeNota('Ana'))

//includes -> true ou false
//indexOf -> numero
/*const  exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] +',sua media é '
 +listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota('Ana'))*/


