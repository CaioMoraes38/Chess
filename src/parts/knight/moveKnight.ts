import Piece from '../piece'

export class Knight extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }
    calcMove( grid: (Piece | null)[][]) {
        let moves = [];
        if(this.line > 1 && this.column > 0){
            let status = this.checkCollision(grid, this.line - 2, this.column - 1);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line - 2, this.column - 1]);
            }
        }
        if(this.line > 1 && this.column < 7){
            let status = this.checkCollision(grid, this.line - 2, this.column + 1);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line - 2, this.column + 1]);
            }
        }
        if(this.line < 6 && this.column > 0){
            let status = this.checkCollision(grid, this.line + 2, this.column - 1);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line + 2, this.column - 1]);
            }
        }
        if(this.line < 6 && this.column < 7){
            let status = this.checkCollision(grid, this.line + 2, this.column + 1);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line + 2, this.column + 1]);
            }
        }
        if(this.line > 0 && this.column > 1){
            let status = this.checkCollision(grid, this.line - 1, this.column - 2);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line - 1, this.column - 2]);
            }
        }
        if(this.line > 0 && this.column < 6){
            let status = this.checkCollision(grid, this.line - 1, this.column + 2);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line - 1, this.column + 2]);
            }
        }
        if(this.line < 7 && this.column > 1){
            let status = this.checkCollision(grid, this.line + 1, this.column - 2);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line + 1, this.column - 2]);
            }
        }
        if(this.line < 7 && this.column < 6){
            let status = this.checkCollision(grid, this.line + 1, this.column + 2);
            if(status === "empty" || status === "enemy"){
                moves.push([this.line + 1, this.column + 2]);
            }
        }
        return moves;
    }
}