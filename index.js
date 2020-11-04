var jogador= [], computador=[];
var pontos = 0, pontosMax = 0;
var index = 0;

//novaJogada();
desabilitarClick();

function capturaDados(valor) {
    jogadasMaximas = computador.length;
    jogador[jogadaAtual] = valor;

    acenderBotao(valor);
    setTimeout(apagarBotao, 200);

    if (computador[jogadaAtual] != jogador[jogadaAtual]) {
        gameOver();
    }

    jogadaAtual++;

    if (jogador.length == jogadasMaximas) {
        pontos++;
        document.getElementById("atual").innerHTML = 'Atual: '+pontos;
        novaJogada();
    }
}

function novaJogada() {
    numero_aleatorio = Math.floor(Math.random() * 4)+1;
    computador[index] = numero_aleatorio;
    jogador = [];
    jogadaAtual = 0;
    tempo = 0;
    
    setTimeout(apagarBotao, 300);
    desabilitarClick();
    
    computador.forEach(valor => {
        tempo++;
        setTimeout(() => {
            acenderBotao(valor);
        }, tempo*1000);
        setTimeout(apagarBotao, tempo*1000 + 500);
    });
    setTimeout(habilitarClick, tempo*1000+500);

    //console.log(computador)
    index++;
}

function acenderBotao(valor) {
    var audio = new Audio();
    switch (valor) {
        case 1:
            document.getElementById('1').style.backgroundColor = "#3232ff";
            audio.src = "audio/botao1.mp3";
            audio.play();
            break;
        case 2:
            document.getElementById('2').style.backgroundColor = "#ff3232";
            audio.src = "audio/botao2.mp3";
            audio.play();
            break;
        case 3:
            document.getElementById('3').style.backgroundColor = "#ffff32";
            audio.src = "audio/botao3.mp3";
            audio.play();
            break;
        case 4:
            document.getElementById('4').style.backgroundColor = "#329932";
            audio.src = "audio/botao4.mp3";
            audio.play();
            break;
        default:
            document.getElementById('1').style.backgroundColor = "#3232ff";
            document.getElementById('2').style.backgroundColor = "#ff3232";
            document.getElementById('3').style.backgroundColor = "#ffff32";
            document.getElementById('4').style.backgroundColor = "#329932";
    }
}

function apagarBotao() {
    document.getElementById('1').style.backgroundColor = "#7f7fff";
    document.getElementById('2').style.backgroundColor = "#ff7f7f";
    document.getElementById('3').style.backgroundColor = "#ffff7f";
    document.getElementById('4').style.backgroundColor = "#7fbf7f";
}

function habilitarClick() {
    document.getElementById('1').style.pointerEvents = "auto";
    document.getElementById('2').style.pointerEvents = "auto";
    document.getElementById('3').style.pointerEvents = "auto";
    document.getElementById('4').style.pointerEvents = "auto";
}

function desabilitarClick() {
    document.getElementById('1').style.pointerEvents = "none";
    document.getElementById('2').style.pointerEvents = "none";
    document.getElementById('3').style.pointerEvents = "none";
    document.getElementById('4').style.pointerEvents = "none";
}

function zerarDados() {
    jogador = [];
    computador = [];
    index = 0;
    pontos = 0;
}

function gameOver() {
    Swal.fire({
        title: 'Game Over!',
        html: '<div>Pontos: ' + pontos + '</div>',
        type: 'error'
    });

    if (pontos > pontosMax) {
        pontosMax = pontos;
        document.getElementById("maximo").innerHTML = 'Maximo: ' + pontosMax;
    }

    setTimeout(acenderBotao, 200);
    desabilitarClick();
    zerarDados();
}

function novoJogo() {
    zerarDados();
    apagarBotao();
    novaJogada();

    document.getElementById("atual").innerHTML = 'Atual: ' + pontos;
}