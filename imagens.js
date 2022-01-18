//Variáveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDoPonto;
let somColisao;

//Função que carrega as imagens pro projeto
function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage ("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarroMao = [imagemCarro1, imagemCarro2, imagemCarro3];
  imagemCarroContra = [imagemCarro1, imagemCarro2, imagemCarro3];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}
