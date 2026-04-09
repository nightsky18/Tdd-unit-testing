// parseador.js
class Parseador {

  obtenerParte1(ecuacion) {
    const partes12 = this._obtenerPartes12(ecuacion);
    const parte1 = partes12[0].trim();
    return parseInt(parte1.substring(0, parte1.length - 1));
  }

  obtenerParte2(ecuacion) {
    const partes12 = this._obtenerPartes12(ecuacion);
    const parte2 = partes12[1].trim();
    const operador = this.obtenerOperador(ecuacion);
    if (operador === '-') {
      return parseInt(parte2) * -1;
    }
    return parseInt(parte2);
  }

  obtenerOperador(ecuacion) {
    if (ecuacion.indexOf('+') > 0) {
      return '+';
    } else {
      return '-';
    }
  }

  obtenerParte3(ecuacion) {
    const partesEcuacion = ecuacion.split('=');
    return parseInt(partesEcuacion[1].trim());
  }

  _obtenerPartes12(ecuacion) {
    const partesEcuacion = ecuacion.split('=');
    const operador = this.obtenerOperador(ecuacion);
    const partes = partesEcuacion[0].split(operador);
    return partes;
  }
}

module.exports = Parseador;