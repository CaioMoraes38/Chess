export default class Piece {
    line: number;
    column: number;
    color: string;
    isAlive: boolean;
    isMoved: boolean;

    constructor(line: number, column: number, color: string) {
        this.line = line;
        this.column = column;
        this.color = color;
        this.isAlive = true; 
        this.isMoved = false;    
    }

    move() {
        console.log("Calculando movimento...");
    }
}