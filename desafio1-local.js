// Implementação das funções gets e print para simular o ambiente da DIO
let inputArray = [];
let currentLine = 0;

function gets() {
  return inputArray[currentLine++];
}

function print(output) {
  console.log(output);
}

// Função para gerar número aleatório entre min e max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função da jornada do herói pela floresta
function jornadaDoHeroi(numeroPassos) {
  let posicaoAtual = 0;

  for (let passo = 1; passo <= numeroPassos; passo++) {
    // Simulando a decisão do herói aleatoriamente
    let decisao = getRandomInt(-10, 10);

    // Atualizando a posição do herói com base na decisão
    posicaoAtual += decisao;

    // Verificar e ajustar a posição para garantir que não ultrapasse 20
    posicaoAtual = Math.min(20, Math.max(1, posicaoAtual));
  }

  return posicaoAtual;
}

// Exemplo de uso com número aleatório apenas para o número de passos
let numeroPassos = getRandomInt(1, 10);

let posicaoFinal = jornadaDoHeroi(numeroPassos);

print(`Posicao final do heroi: ${posicaoFinal}`);

// Obs: Adaptado para funcionar localmente