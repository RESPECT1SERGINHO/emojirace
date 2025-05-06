
let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["◖⚆ᴥ⚆◗", "[̲̅$̲̅(̲̅ ͡ಠ_ಠ)̲̅$̲̅]", "  ಡ ͜ ʖ ಡ", " .·´¯`(>▂<)´¯`·."];
let contagem = jogador.length;
let teclas = ["a", "s", "d", "f"];

function setup() {
  createCanvas(400, 400);
  createCanvas(800, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  
  defineTela();
  mostraJogadores();
  desenheChegada();
  defineVencedor();
  
}  
  
function defineTela(){
  if (focused == true){
  background('#2196F3');
  } else {
   background('rgb(180,36,36)');
  }
  }
  
  function mostraJogadores(){
 textSize(30);
  for (let i = 0; i < contagem; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
     }
   }

  function desenheChegada(){
    fill("red")
   rect(600, 0, 10, 400);
    fill("");
    for (let yAtual = 0; yAtual < 400; yAtual += 20){rect(600, yAtual, 10, 10);
   rect (670, yAtual, 10, 10);
  }
}

  function defineVencedor(){
  textAlign(CENTER, CENTER);
  for (let i = 0; i < contagem; i++){
    fill("white");
  if (xJogador[i] > 550){
text(jogador[i] + "🆅🅾🅲ê 🅶🅰🅽🅷🅾🆄!", width / 2, height / 2);
    noLoop();
  }
  } 
  }
function keyReleased(){
  for(let i = 0; i < contagem; i ++) {
  if (key == teclas[i]) {
    xJogador [i] += random(20);
    }
   }
}