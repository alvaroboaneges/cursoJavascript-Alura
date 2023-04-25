//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 19;
let raioBolinha = diametroBolinha / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let trilha;
let raquetada;
let ponto;

let chanceDeErrar = 0;

function preload (){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  aparenciaBolinha();
  movimentoBolinha();
  limitebordasBolinha();
  aparenciaRaquete(xRaquete, yRaquete);
  aparenciaRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoMinhaRaquete();
  colisaoRaqueteBolinha(xRaquete, yRaquete);
  colisaoRaqueteBolinha(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  calculaChanceDeErrar();
  
}

function aparenciaBolinha() {
    circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentoBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function limitebordasBolinha() {
    if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
        velocidadeYBolinha *= -1;
    }
} 

function aparenciaRaquete(x,y) {
  rect(x, y, comprimentoRaquete, alturaRaquete)

}

function movimentoMinhaRaquete() {
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }  
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;     
    }     
}

function colisaoRaqueteBolinha(x, y) {
    colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function movimentoRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
  calculaChanceDeErrar()
}

  function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

//função para multiplayer
//function movimentoRaqueteOponente() {
//    if (keyIsDown(87)){
//      yRaqueteOponente -= 10;
//    }  
//    if (keyIsDown(83)){
//      yRaqueteOponente += 10;     
//    }     
//}

function incluiPlacar() {
    stroke(11);
    textAlign (CENTER);
    textSize(16);
    fill(color(25, 173, 243))
    rect(150, 10, 40, 20)
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(25, 173,243))
    rect(450, 10, 40, 20)
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}

function bolinhaNaoFicaPresa() {
    if (xBolinha - raioBolinha <= 0){
      xBolinha = 25;
    } else if (xBolinha + raioBolinha >= 599){
        xBolinha = width - 10;
    }
}