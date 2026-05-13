var Aluno 
var Treino 
Aluno = prompt("Digite o seu nome: ")
Treino = prompt("Digite o nome do treino: ")
alert("Olá " + Aluno + ", seja bem-vindo ao treino de " + Treino + "!")
var exercicio1 = prompt("Digite o nome do primeiro exercício: ")
var repeticoes1 = prompt("Digite o número de repetições para o exercício " + exercicio1 + ": ")
var exercicio2 = prompt("Digite o nome do segundo exercício: ")
var repeticoes2 = prompt("Digite o número de repetições para o exercício " + exercicio2 + ": ")
var exercicio3 = prompt("Digite o nome do terceiro exercício: ")
var repeticoes3 = prompt("Digite o número de repetições para o exercício " + exercicio3 + ": ")
prompt("Aqui está o seu treino, " + Aluno + ": \n1. " + exercicio1 + " - " + repeticoes1 + " repetições\n2. " + exercicio2 + " - " + repeticoes2 + " repetições\n3. " + exercicio3 + " - " + repeticoes3 + " repetições\nBoa sorte com o seu treino de " + Treino + "!")
var feedback = prompt("Como você se sentiu durante o treino? (Digite 'bom', 'ruim' ou 'neutro')")
if (feedback.toLowerCase() === "bom") {
    alert("Fico feliz em saber que você se sentiu bem durante o treino, " + Aluno + "! Continue assim!")
} else if (feedback.toLowerCase() === "ruim") {
    alert("Sinto muito que você não tenha se sentido bem durante o treino, " + Aluno + ". Talvez seja uma boa ideia ajustar o treino ou descansar um pouco.")
} else if (feedback.toLowerCase() === "neutro") {
    alert("Entendo, " + Aluno + ". Às vezes, o treino pode ser desafiador, mas continue se esforçando e você verá os resultados!")
} else {
    alert("Feedback inválido, " + Aluno + ". Por favor, responda com 'bom', 'ruim' ou 'neutro'.")
}   


var continuarmontando = prompt("Deseja montar outro treino? (Digite 'sim' ou 'não')")
if (continuarmontando.toLowerCase() === "sim") {
    alert("Ótimo! Vamos montar outro treino para você, " + Aluno + "!")
} else if (continuarmontando.toLowerCase() === "não") {
    alert("Obrigado por usar o nosso sistema de treino, " + Aluno + "! Até a próxima!")
} else {
    alert("Resposta inválida, " + Aluno + ". Por favor, responda com 'sim' ou 'não'.")
}   

var treino2 = prompt("Digite o nome do próximo treino que você gostaria de montar: ")
alert("Vamos montar o treino de " + treino2 + " para você, " + Aluno + "!")
var fim = prompt("Deseja finalizar o processo? (Digite 'sim' ou 'não')")
if (fim.toLowerCase() === "sim") {
    alert("Obrigado por usar o nosso sistema de treino, " + Aluno + "! Até a próxima!")
} else if (fim.toLowerCase() === "não") {
    alert("Ótimo! Vamos continuar montando treinos para você, " + Aluno + "!")
} else {
    alert("Resposta inválida, " + Aluno + ". Por favor, responda com 'sim' ou 'não'.")
}   
