//Variáveis do ator-1
let yAtor = 366;
let xAtor = 85;

//Variável de colisão do ator utilizando p5
let colisao = false;

//Variáveis dos pontos
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
    }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}
function verificaColisaoMao(){
  for (let i = 0; i < imagemCarroMao.length; i ++){
    colisao = collideRectCircle(xCarroMao[i], yCarroMao[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      colidiuMao();
      somColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
  }
function colidiuMao(){
  yAtor = 366;
}
function verificaColisaoContra(){
  for (let i = 0; i < imagemCarroContra.length; i ++){
    colisao = collideRectCircle(xCarroContra[i], yCarrosContra[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      colidiuContra();
      somColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
  }
function colidiuContra(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  textFont('Tahoma');
  fill(color(208, 82, 29))
  text(meusPontos, width / 2, 27);
}
function voltarAtor(){
  yAtor = 366;
}
function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltarAtor();
  }
}
function podeSeMover(){
  return yAtor < 366;;
}