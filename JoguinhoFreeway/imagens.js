// Imagens e Sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarroVerde;
let imagemCarroPreto;
let imagemCarroAmarelo;

let somTrilha;
let somColisão;
let somPonto;


function preload()
{
  imagemDaEstrada = loadImage ("imagens/estrada.png")
  imagemDoAtor = loadImage ("imagens/ator-1.png")
  imagemCarroVerde = loadImage ("imagens/carro-1.png")
  imagemCarroPreto = loadImage ("imagens/carro-2.png")
  imagemCarroAmarelo = loadImage ("imagens/carro-3.png")
  imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo]
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisão = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}