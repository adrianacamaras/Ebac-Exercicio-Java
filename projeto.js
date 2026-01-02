class Parquimetro {

  calcular(valor) {

    if (valor < 1) {
      return "Valor insuficiente";
    }

    if (valor < 2) {
      return "Tempo: 30 minutos<br>Troco: R$ " + (valor - 1).toFixed(2);
    }

    if (valor < 3) {
      return "Tempo: 60 minutos<br>Troco: R$ " + (valor - 2).toFixed(2);
    }

    return "Tempo: 120 minutos<br>Troco: R$ " + (valor - 3).toFixed(2);
  }
}

function calcular() {
  let valor = parseFloat(document.getElementById("valor").value);
  let resultado = document.getElementById("resultado");

  let parquimetro = new Parquimetro();
  resultado.innerHTML = parquimetro.calcular(valor);
}