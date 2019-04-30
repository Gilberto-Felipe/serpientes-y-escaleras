class Serpiente {
    constructor(origen, destino) {
        this._origen = origen;
        this._destino = destino;
    }

    set Origen(origen) {
        this._origen = origen;
    }

    set Destino(destino) {
        this._destino = destino;
    }

    get Origen() {
        return this._origen;
    }

    get Destino() {
        return this._destino;
    }

    Serpiente = (posicion) => {
        if (posicion === Serpiente.Origen)
            posicion = Serpiente.Destino;
    } 
}
export default Serpiente