// questão01
function escreverMensagem() {
    setTimeout(function() {
        console.log(mensagem);
    }, 5000,) 
}

// questão02
function imprimeParametros(...params){
    params.forEach(param => {
        console.log(param);
    });
}

// questão03
function funcaoDeDeclaracao() {
    console.log("Esta é uma função de declaração");
} 
// função de expressão
const funcaoExpressao = function() {
    console.log("Esta é uma função de declaração");

}

// questão04


// questão05 
let x = 5;
x = 10;
// variável com const
const y = 5;

// questão06
const pessoa = {
    nome: 'Fulano',
    nascimento: '01/01/2001',
    cpf: '123.456.765-94' 
};

const aluno = {
    matriculas: '1, 2, 3,'
    notas:[7, 8, 9, 10],
}

