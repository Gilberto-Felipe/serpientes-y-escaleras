class Jugador {
    constructor (nombre){
        this._nombre = nombre;
        this._posicion = 0;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Nombre() {
        return this._nombre;
    }

    get Posicion(){
        return this._posicion;
    }

    mover = (posicion, casillas) => {
        this._posicion += posicion;
        if (casillas[this._posicion] !== casillas + 1)
            this._posicion = casillas[this._posicion] - 1;
        console.log(this._nombre, 'avanza a la casilla');
        console.log(casillas[this._posicion]);
                
    }
}


