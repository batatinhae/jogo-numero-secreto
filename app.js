
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Essa função é dificil de entender
// Ela cria a variavel campo que recebe uma tag essa tag vai ser trocada pelo variavel de texto no html
// Depois ela pega a variavel campo que na verdade e a tag do html e com a função innerHTML define otexto que sera exibido
function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // Uma api que ler o texto do jogo
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
exibirTextoNaTela("h1", "Jogo do Numero Secreto");
exibirTextoNaTela("p", "Digite um numero de 1 a 10");

// Pega o valor do inputo no html e  depois limpa o valor 
function limparCampo(){

    chute = document.querySelector(`input`);
    chute.value = "";

}

function novoJogo(){
    tentativas = 1;
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    exibirTextoNaTela("h1", "Jogo do Numero Secreto");
    exibirTextoNaTela("p", "Digite um numero de 1 a 10");
    document.getElementById("reiniciar").setAttribute("disabled", true);
    

}

// verifica o numero secreto
function verificarChute(){
    let chute = document.querySelector(`input`).value;
    
    if(chute==numeroSecreto){
        
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let msgtentativas = `Parabens voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela("h1","Acertou");
        exibirTextoNaTela("p", msgtentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");

        }
         else{
            if(chute>numeroSecreto){
            exibirTextoNaTela("h1","Errou");
            exibirTextoNaTela("p","Numero secreto é menor");
            }
            if(chute<numeroSecreto){
                exibirTextoNaTela("h1","Errou");
                exibirTextoNaTela("p","Numero secreto é maior");
                }
                tentativas++;
                limparCampo();
        }
        
}
// Gera um numero aleatorio o parseint é para retorna para a maquina o numero randomico e inteiro
function gerarNumeroAleatorio(){

    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeNumeroDaListaDeNumeroSorteados = listaDeNumeroSorteados.length;
    if(quantidadeDeNumeroDaListaDeNumeroSorteados == numeroLimite){
        listaDeNumeroSorteados=[];
    }
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {

        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}