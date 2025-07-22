let expressao = '';
const visor = document.getElementById('calc-output');

function atualizarDisplay() {
  visor.textContent = expressao || '0';
}

function limpar() {
  expressao = '';
  atualizarDisplay();
}

function calcular() {
  try {
    expressao = eval(expressao).toString();
  } catch {
    expressao = '';
    visor.textContent = 'Erro';
    return;
  }
  atualizarDisplay();
}

const botoes = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','C'];

botoes.forEach(function(valor) {
  const botao = document.getElementById(`button-${valor}`);
  if (!botao) return;

  if (valor === 'C') {
    botao.addEventListener('click', limpar);
  } else if (valor === '=') {
    botao.addEventListener('click', calcular);
  } else {
    botao.addEventListener('click', function() {
      expressao += valor;
      atualizarDisplay();
    });
  }
});

atualizarDisplay();
