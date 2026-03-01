import Piece from "../piece";

export class Pawn extends Piece{
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }
    calcMove(){
        let direction = this.color == "white" ? -1 : 1;
        let moves = [];

        if(this.isMoved ==false){
            moves.push([this.line + 2 * direction, this.column]);
        };  
            moves.push([this.line + direction, this.column]);
            moves.push([this.line + direction, this.column - 1]);
            moves.push([this.line + direction, this.column + 1]);
        
        return moves;
      
    }
}