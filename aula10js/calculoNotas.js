var alunos = ["Pedro", "Tiago", "João"];
var notasA = [8.0, 7.0, 6.0];
var notasB = [7.0, 5.5, 6.3];

function media(nota1, nota2){
    var n1 = nota1
    var n2 = nota2
    var media = (n1 + n2) / 2
    return media
}

function mostraResultados(){
    for(var index in alunos){
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        console.log("O aluno", alunos[index], "teve média de", mediaAtual)
    }
}

mostraResultados()

function mostrarAprovados(){
    for(var index in alunos){
        var notaPri = notasA[index]
        var notaSeg = notasB[index]
        var mediaAtual = media(notaPri, notaSeg)
        if(mediaAtual < 7 && mediaAtual > 5){
            console.log("O aluno", alunos[index], "ficou de recuperação.");
            
        }
        else if(mediaAtual < 5){
            console.log("O aluno", alunos[index], "ficou reprovado.");
            
        }
        else{
            console.log("O aluno", alunos[index], "foi aprovado");
            
        }
    }
}

mostrarAprovados()