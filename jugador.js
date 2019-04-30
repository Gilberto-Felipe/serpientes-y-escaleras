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

    mover = (posicion) => {
        this._posicion += posicion;
        console.log(this._nombre, 'avanza a la casilla');
        console.log(this._posicion);
                
    }
}


