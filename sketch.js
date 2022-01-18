console.log("Bem vindo ao Freeway!")

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarroMao();
  mostraCarroContra();
  movimentaCarroMao();
  movimentaCarroContra();
  movimentaAtor();
  voltaPosicaoInicialDoCarroMao();
  voltaPosicaoInicialDoCarroContra();
  verificaColisaoMao();
  verificaColisaoContra();
  incluiPontos();
  marcaPontos();
}