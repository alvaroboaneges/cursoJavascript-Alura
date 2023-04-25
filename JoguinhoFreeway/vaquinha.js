// Vaquinha

let xAtor = 85
let yAtor = 366
let colisao = false
let meusPontos = 0


function mostraVaquinha()
{
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentoVaquinha()
{
  if (keyIsDown(UP_ARROW))
  {
    yAtor -= 3
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    if(podeSeMover())
    {
      yAtor += 3
    }
  }
}

function verificaColisao()
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

{
  for (let i=0; i<imagemCarros.length; i++)
  {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPosicaoInicial();
      somColisão.play();
      if (pontoMaiorQueZero())
      {
        meusPontos -= 1
      }
    }
  }
}

function voltaAtorPosicaoInicial()
{
  yAtor = 366;
}

function incluiPontos()
{
  textAlign (CENTER);
  textSize (25);
  fill (color(173, 255, 47));
  text (meusPontos, width/5, 27);
}

function marcaPonto()
{
  if (yAtor<15)
  {
    meusPontos += 1;
    somPonto.play();
    voltaAtorPosicaoInicial()
  }
}

function pontoMaiorQueZero()
{
  return meusPontos > 0;
}

function podeSeMover()
{
  return yAtor < 366;
}
