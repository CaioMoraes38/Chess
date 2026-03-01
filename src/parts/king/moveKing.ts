import Piece from "../piece";

export class King extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }

    calcMove(){
        let moves = [];
        if(this.line > 0){
           moves.push([this.line - 1, this.column]);
        }
        if(this.line<7){
            moves.push([this.line + 1, this.column]);        
        }    
        if(this.column > 0){
            moves.push([this.line, this.column - 1]);
        }
        if(this.column < 7){
            moves.push([this.line, this.column + 1]);
        }
        if(this.line >0 && this.column > 0){
            moves.push([this.line - 1, this.column - 1]);
        }
        if(this.line > 0 && this.column < 7){
            moves.push([this.line - 1, this.column + 1]);
           
        }
        if(this.line < 7 && this.column > 0){
            moves.push([this.line + 1, this.column - 1]);
           
        }
        if(this.line < 7 && this.column < 7){
            moves.push([this.line + 1, this.column + 1]);           
        }
        return moves;
    }

}

