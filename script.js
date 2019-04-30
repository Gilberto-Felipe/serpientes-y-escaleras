// creo los objetos
let tablero = new Tablero();
console.log(tablero.Casillas);

let dado = new Dado();
let jugadorA = new Jugador('Pedro');
let jugadorB = new Jugador('Masha');

// el jugador que llegue primero a la casilla 100 gana
while (jugadorA.Posicion < 100 && jugadorB.Posicion < 100) {
    // el juagdorA ubica su posición, lanza el dado y avanza
    jugadorA.Posicion;
    jugadorA.mover(dado.lanzar());
    //jugadorA.Posicion = tablero.Casillas[contador];

    // el jugadorB lanza el dado y avanza
    jugadorB.Posicion;
    jugadorB.mover(dado.lanzar());
}

