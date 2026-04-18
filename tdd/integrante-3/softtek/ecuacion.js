function obtenerParte1(ecuacion) {
  const match = ecuacion.match(/^(\d+)x/);
  return match ? parseInt(match[1], 10) : 0;
}

function obtenerParte2(ecuacion) {
  const match = ecuacion.match(/[+-]\s(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function obtenerParte3(ecuacion) {
  const match = ecuacion.match(/=\s(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function obtenerOperador(ecuacion) {
  const match = ecuacion.match(/([+-])/);
  return match ? match[1] : '+';
}

function obtenerResultado(ecuacion) {
  const a = obtenerParte1(ecuacion);
  const b = obtenerParte2(ecuacion);
  const c = obtenerParte3(ecuacion);
  const operador = obtenerOperador(ecuacion);

  if (operador === '+') {
    return (c - b) / a;
  } else {
    return (c + b) / a;
  }
}

module.exports = {
  obtenerParte1,
  obtenerParte2,
  obtenerParte3,
  obtenerOperador,
  obtenerResultado
};