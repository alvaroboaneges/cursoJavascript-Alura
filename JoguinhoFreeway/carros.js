// Carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 318];
let velocidadeCarros = [3, 2.5, 3.2, 5, 3.3, 2,8];
let comprimentoCarros = 50
let alturaCarros = 40    


function mostraCarros()
{
  for (let i=0; i<imagemCarros.length; i++)
    { 
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

function movimentoCarros()
{
  for (let i=0; i<imagemCarros.length; i++)
    {
      xCarros[i] -= velocidadeCarros[i];
    }
}

function loopingCarros()
{
  for (let i=0; i<imagemCarros.length; i++)
  {
    if (passouTodaTela(xCarros[i]))
    {
      xCarros[i] = 600;
    }
  }
}  

function passouTodaTela(xCarros)
{
  return xCarros < -50
}





  




