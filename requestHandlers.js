function iniciar() {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  function sleep(milliSeconds) {
   // obten la hora actual
   var startTime = new Date().getTime();
   // atasca la cpu
   while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
    return "Hola Iniciar";
}

function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  return "Hola Subir";
}

exports.iniciar = iniciar;
exports.subir = subir;
