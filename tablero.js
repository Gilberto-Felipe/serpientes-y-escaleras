class Tablero {
    constructor () {
        this._casillas = [];
    }
    
    get Casillas() {
        for (let index = 1; index <= 100; index++){
            this._casillas.push(index);
        }

        //escaleras
        this._casillas[7] = 29;
        this._casillas[21] = 61;
        this._casillas[53] = 68;
        this._casillas[64] = 97;
        this._casillas[71] = 93;

        // serpientes 
        this._casillas[22] = 17;
        this._casillas[44] = 5;
        this._casillas[51] = 33;
        this._casillas[66] = 28;
        this._casillas[89] = 50;
        this._casillas[98] = 24;

        return this._casillas;
    }
}