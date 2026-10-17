let nome = "Gustavo";
let profissao = "Desenvoldedor Front-end";
let horasEstudadas = 1;

console.log ("Olá," + nome);
console.log ("Profissãoatual:" + profissao);
console.log ("Horas estudadas: " + horasEstudadas);

if (horasEstudadas >= 2) {
    console.log("meta diária atingida");
} else {
    console.log("Continue estudando!");
}


const meuBotao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

meuBotao.addEventListener("click", function() {
    if (mensagem.textContent === "") {
        mensagem.textContent = "Primeiro clique! Estou aprendendo JavaScript.";
    } else {
        mensagem.textContent = "";
    }
});