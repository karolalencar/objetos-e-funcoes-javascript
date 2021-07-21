function corrigirProva (prova) {
    let contador = 0;
    for (let questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            contador++;
        }
    }
    return contador;
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "d"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


const acertos = corrigirProva(prova);
console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${acertos * 2}`);