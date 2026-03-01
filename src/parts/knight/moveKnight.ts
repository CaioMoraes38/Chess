import Piece from '../piece'

export class Knight extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }
    calcMove(){
        let moves = [];
        if(this.line > 1 && this.column > 0){
            moves.push([this.line - 2, this.column - 1]);
        }
        if(this.line > 1 && this.column < 7){
            moves.push([this.line - 2, this.column + 1]);
        }
        if(this.line < 6 && this.column > 0){
            moves.push([this.line + 2, this.column - 1]);
        }
        if(this.line < 6 && this.column < 7){
            moves.push([this.line + 2, this.column + 1]);
        }
        if(this.line > 0 && this.column > 1){
            moves.push([this.line - 1, this.column - 2]);
        }
        if(this.line > 0 && this.column < 6){
            moves.push([this.line - 1, this.column + 2]);
        }
        if(this.line < 7 && this.column > 1){
            moves.push([this.line + 1, this.column - 2]);
        }
        if(this.line < 7 && this.column < 6){
            moves.push([this.line + 1, this.column + 2]);
        }
        return moves;
    }
}