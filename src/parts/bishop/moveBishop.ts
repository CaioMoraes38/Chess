import Piece from "../piece";

export class Bishop extends Piece {
   constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }
    calcMove( grid: (Piece | null)[][]) {
        let moves = [];
        if(this.line > 0 && this.column > 0){
            for(let i = this.line - 1, j = this.column - 1; i >= 0 && j >= 0; i--, j--){
                let status = this.checkCollision(grid, i, j);
                if (status === "empty") {
                    moves.push([i, j]);
                } else if (status === "enemy") {
                    moves.push([i, j]);
                    break;
                } else {
                    break;
                }
            }
        }
        if(this.line > 0 && this.column < 7){
            for(let i = this.line - 1, j = this.column + 1; i >= 0 && j <= 7; i--, j++){
                let status = this.checkCollision(grid, i, j);
                if (status === "empty") {
                    moves.push([i, j]);
                } else if (status === "enemy") {
                    moves.push([i, j]);
                    break;
                } else {
                    break;
                }
            }
        }
        if(this.line < 7 && this.column > 0){
            for(let i = this.line + 1, j = this.column - 1; i <= 7 && j >= 0; i++, j--){
                let status = this.checkCollision(grid, i, j);
                if (status === "empty") {
                    moves.push([i, j]);
                } else if (status === "enemy") {
                    moves.push([i, j]);
                    break;
                } else {
                    break;
                }
            }
        }
        if(this.line < 7 && this.column < 7){
            for(let i = this.line + 1, j = this.column + 1; i <= 7 && j <= 7; i++, j++){
                let status = this.checkCollision(grid, i, j);
                if (status === "empty") {
                    moves.push([i, j]);
                } else if (status === "enemy") {
                    moves.push([i, j]);
                    break;
                } else {
                    break;
                }
            }
        }
        return moves;
    }
    
  }