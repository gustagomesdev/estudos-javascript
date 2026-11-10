let nome = "Gustavo";
let profissao = "Desenvolvedor Front-end";
let horasEstudadas = 1;

console.log ("Olá," + nome);
console.log ("Profissãoatual:" + profissao);
console.log ("Horas estudadas: " + horasEstudadas);

if (horasEstudadas >= 2) {
    console.log("meta diária atingida");
} else {
    console.log("Continue estudando!");
}


//const meuBotao = document.getElementById("meuBotao");
//const mensagem = document.getElementById("mensagem");

/*meuBotao.addEventListener("click", function() {
    if (mensagem.textContent === "") {
        mensagem.textContent = "Primeiro clique! Estou aprendendo JavaScript.";
    } else {
        mensagem.textContent = "";
    }
});*/


function darBoasVindas() {
    console.log ("Olá, Gustavo! Bem-vindo ao Dia 4.")

}

darBoasVindas();


let nomes = ["Gustavo", "Maria", "Pedro"];

console.log(nomes);

nomes.pop ();
nomes.push ("Felipe");


console.log(nomes[2]);


//dia 6 objeto

let pessoa = {
    nome: "Gustavo",
    profissao: "Web designer",
    idade: 26
};

pessoa.profissao = "Desenvolvedor";

pessoa.altura = "1,74 m";

console.log(pessoa);

console.log(pessoa.profissao);
console.log(pessoa.altura);

for (let i = 0; i < 5; i++) {
    console.log("Estou aprendendo JavaScript");
}

for(let i = 1; i <= 3; i++) {
    console.log(i);
}

let i = 1;

while (i<= 5) {
    console.log(i);
    i++;
}


let numeros = [2, 7, 4, 9, 3];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 5) {
        console.log(numeros[i]);
    }
}

let notas = [5, 8, 6, 10, 4];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        console.log ("Aprovado");
    } else {
        console.log("Reprovado");
    }
}



//dia 11

const titulo =  document.getElementById("titulo");

console.log(titulo);

titulo.textContent = 'Consegui manipular o HTML';

const meuBotao = document.getElementById("meuBotao");
const mensagem = document.getElementById('mensagem')


meuBotao.addEventListener('click', function() {
    mensagem.textContent = 'Você clicou no botão!';
})

const botaoAlternar = document.getElementById('botaoAlternar');
const mensagemAlternar = document.getElementById('mensagemAlternar');

botaoAlternar.addEventListener('click', function () {
    if (mensagemAlternar.textContent === "Olá! Seja bem-vindo!") {
        mensagemAlternar.textContent = "Você está aprendendo java Script!";
    } else {
        mensagemAlternar.textContent = "Olá! Seja bem-vindo!"
    }
});



//dia 12
const campoNome = document.getElementById("nomeUsuario");
const botaoEnviar = document.getElementById("botaoEnviar");
const resposta = document.getElementById("resposta");


botaoEnviar.addEventListener("click", function() {
    const nomeDigitado = campoNome.value.trim();

    if (nomeDigitado === "") {
        resposta.textContent = "Por favor, digite seu nome.";
    } else {
        resposta.textContent = "Olá, " + nomeDigitado + "! Seja bem-vindo!";
    }
});


//dia 14

const nomeAoVivo = document.getElementById("nomeAoVivo");
const preVisualizacao = document.getElementById("preVisualizacao");

nomeAoVivo.addEventListener("input", function () {
    if (nomeAoVivo.value.trim() === "") {
        preVisualizacao.textContent = "Sua mensagem aparecerá aqui.";
    } else {
        preVisualizacao.textContent = "Olá, " + nomeAoVivo.value + "!";
    }
});



//dia 15

const nomeCadastro = document.getElementById('nomeCadastro'); //essa variavel é do campo html
const emailCadastro = document.getElementById('emailCadastro'); //essa variavel é do campo html
const enviarCadastro = document.getElementById('enviarCadastro'); //essa variavel é do campo html
const resultadoCadastro = document.getElementById('resultadoCadastro'); //essa variavel é do campo html

enviarCadastro.addEventListener('click', function() {
    const nome = nomeCadastro.value.trim(); //essa variavel é pro valor digitado
    const email = emailCadastro.value.trim();//essa variavel é pro valor digitado

    if (nome === "" || email === "") {
        resultadoCadastro.textContent = 'Preencha todos os campos!'
    } else {
        resultadoCadastro.textContent = "Cadastro realizado com  sucesso, " + nome +"!";
    }

});
