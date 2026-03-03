import Piece from '../piece';

export class Rook extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }

    calcMove(grid: (Piece | null)[][]) {
        let moves = [];
        
        if(this.line > 0){
            for(let i = this.line - 1; i >= 0; i--){
                let status = this.checkCollision(grid, i, this.column); 
                
                if (status === "empty") {
                    moves.push([i, this.column]); 
                } else if (status === "enemy") {
                    moves.push([i, this.column]); 
                    break; 
                } else if (status === "friend") {
                    break; 
                }
            }
        }
        
        if(this.line < 7){
            for(let i = this.line + 1; i <= 7; i++){
                let status = this.checkCollision(grid, i, this.column); 
                
                if (status === "empty") {
                    moves.push([i, this.column]); 
                } else if (status === "enemy") {
                    moves.push([i, this.column]); 
                    break;
                } else if (status === "friend") {
                    break; 
                }
            }
        }
        
        if(this.column > 0){
            for(let i = this.column - 1; i >= 0; i--){
                let status = this.checkCollision(grid, this.line, i); 
                
                if (status === "empty") {
                    moves.push([this.line, i]); 
                } else if (status === "enemy") {
                    moves.push([this.line, i]); 
                    break;
                } else if (status === "friend") {
                    break; 
                }
            }
        }
        
        if(this.column < 7){
            for(let i = this.column + 1; i <= 7; i++){
                let status = this.checkCollision(grid, this.line, i); 
                
                if (status === "empty") {
                    moves.push([this.line, i]); 
                } else if (status === "enemy") {
                    moves.push([this.line, i]); 
                    break;
                } else if (status === "friend") {
                    break; 
                }
            }
        }
        
        return moves;
    }
}