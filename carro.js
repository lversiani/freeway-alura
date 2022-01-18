
//Lista dos valores de y dos carros
let yCarroMao = [40, 96, 150]; //Lista: para chamar determinado valor da lista usa-se, por exemplo: yCarros[0], onde 0 é o índice do primeiro valor, ou seja, valor 40 neste caso.
let yCarrosContra = [210, 260, 318]

//Lista de velocidades dos carros
let velocidadeCarros = [2, 2.5, 3.2, -5, -3.3, -2.3]

//Lista dos valores de x dos carros
let xCarroMao = [470, 470, 470];
let xCarroContra = [10, 10, 10]

//Variáveis de características dos carros
let comprimentoCarro = 50;
let alturaCarro = 40;

//Laço de repetição
function mostraCarroMao(){
  for(let i = 0; i < imagemCarroMao.length; i ++){
    image(imagemCarroMao[i], xCarroMao[i], yCarroMao[i], comprimentoCarro, alturaCarro)
  }
}
  function mostraCarroContra(){
  for(let i = 0; i < imagemCarroContra.length; i ++){
    image(imagemCarroContra[i], xCarroContra[i], yCarrosContra[i], comprimentoCarro, alturaCarro)
  }
}
function movimentaCarroMao(){
  for(let i = 0; i < imagemCarroMao.length; i ++){
    xCarroMao[i] -= velocidadeCarros[i];
  }
}
  function movimentaCarroContra(){
  for(let i = 0; i < imagemCarroContra.length; i ++){
    xCarroContra[i] += velocidadeCarros[i];
  }
}
function voltaPosicaoInicialDoCarroMao(){
  for(let i = 0; i < imagemCarroMao.length; i ++){
    if(passouTodaTelaMao(xCarroMao[i])){
      xCarroMao[i] = 450;
    }
  }
}
function voltaPosicaoInicialDoCarroContra(){
  for(let i = 0; i < imagemCarroContra.length; i ++){
    if(passouTodaTelaContra(xCarroContra[i]))
  xCarroContra[i] = 10;
  }   
}
function passouTodaTelaMao(xCarroMao){
  return xCarroMao < -50;
}
function passouTodaTelaContra(xCarroContra){
  return xCarroContra > 450;
}