import Piece from "../piece";

export class Queen extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }

    calcMove(){
        let moves = [];
        if(this.line > 0){
            for(let i = this.line - 1; i >= 0; i--){
                moves.push([i, this.column]);
            }
        }
        if(this.line<7){
            for(let i = this.line +1; i <=7 ; i++){
                moves.push([i, this.column]);
            }
        }    
        if(this.column > 0){
            for(let i = this.column - 1; i >= 0; i--){
                moves.push([this.line, i]);
            }
        }
        if(this.column < 7){
            for(let i = this.column + 1; i <= 7; i++){
                moves.push([this.line, i]);
            }
        }
        if(this.line >0 && this.column > 0){
            for(let i = this.line - 1, j = this.column - 1; i >= 0 && j >= 0; i--, j--){
                moves.push([i, j]);
            }
        }
        if(this.line > 0 && this.column < 7){
            for(let i = this.line - 1, j = this.column + 1; i >= 0 && j <= 7; i--, j++){
                moves.push([i, j]);
            }
        }
        if(this.line < 7 && this.column > 0){
            for(let i = this.line + 1, j = this.column - 1; i <= 7 && j >= 0; i++, j--){
                moves.push([i, j]);
            }
        }
        if(this.line < 7 && this.column < 7){
            for(let i = this.line + 1, j = this.column + 1; i <= 7 && j <= 7; i++, j++){
                moves.push([i, j]);
            }
        }
        return moves;
    }

}


