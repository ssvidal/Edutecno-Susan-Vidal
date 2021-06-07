function Cachipun() {
  //pedir numero de juegos al usuario y guardarlo en variable numeroJuegos
  const numeroJuegos = prompt("Ingrese el numero de veces que desea jugar");

  for (var i = 0; i < Number(numeroJuegos); i++) {
    //guardar eleccion del usuario en variable eleccion convirtiendo a mayusculas
    let eleccion = prompt(
      "Escriba su opcion (Piedra, papel o tijera)"
    ).toUpperCase();

    //crear variable eleccionCom (la eleccion de la computadora)
    let eleccionCom;
    //guardar numero aleatorio entre 0 y 3 en variable numeroAleatorio
    let numeroAleatorio = Math.floor(Math.random() * 3);
    //guardar en eleccionCom la opcion si el numero aleatorio es 0 PIEDRA, si es 1 TIJERA y si es 2 PAPEL
    if (numeroAleatorio === 0) {
      eleccionCom = "PIEDRA";
    } else if (numeroAleatorio === 1) {
      eleccionCom = "TIJERA";
    } else {
      eleccionCom = "PAPEL";
    }

    //comparar elecciones para elegir al ganador
    if (eleccion === eleccionCom) {
      alert(
        "Empataron, has elegido " +
          eleccion +
          " y la computadora eligio " +
          eleccionCom
      );
    } else if (eleccion === "PAPEL" && eleccionCom === "TIJERA") {
      alert(
        "Perdiste, has elegido " +
          eleccion +
          " y la computadora eligio " +
          eleccionCom
      );
    } else if (eleccion === "TIJERA" && eleccionCom === "PIEDRA") {
      alert(
        "Perdiste, has elegido " +
          eleccion +
          " y la computadora eligio " +
          eleccionCom
      );
    } else if (eleccion === "PIEDRA" && eleccionCom === "PAPEL") {
      alert(
        "Perdiste, has elegido " +
          eleccion +
          " y la computadora eligio " +
          eleccionCom
      );
    } else {
      alert(
        "Ganaste, has elegido " +
          eleccion +
          " y la computadora eligio " +
          eleccionCom
      );
    }
  }
}
Cachipun();
