function setup() 
{
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() 
{
  background(imagemDaEstrada);
  mostraVaquinha();
  movimentoVaquinha();
  mostraCarros();
  movimentoCarros();
  loopingCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto()
}



