// ecuacion.js
const Parseador = require('./parseador');

class EcuacionPrimerGrado {

  constructor() {
    this.parseador = new Parseador();
  }

  obtenerResultado(ecuacion) {
    const parte1 = this.parseador.obtenerParte1(ecuacion);
    const parte2 = this.parseador.obtenerParte2(ecuacion);
    const parte3 = this.parseador.obtenerParte3(ecuacion);
    const resultado = (parte3 - parte2) / parte1;
    return resultado;
  }
}

module.exports = EcuacionPrimerGrado;