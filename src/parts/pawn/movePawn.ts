import Piece from "../piece";

export class Pawn extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }

    calcMove(grid: (Piece | null)[][]) {
    let direction = this.color == "white" ? 1 : -1
        let moves = [];
        
        let nextLine = this.line + direction;

        if (nextLine >= 0 && nextLine <= 7) {

            let statusForward = this.checkCollision(grid, nextLine, this.column);
            
            if (statusForward === "empty") {
                moves.push([nextLine, this.column]);

                if (this.isMoved == false) {
                    let doubleLine = this.line + 2 * direction;
                    
                    if (doubleLine >= 0 && doubleLine <= 7) {
                        let statusDouble = this.checkCollision(grid, doubleLine, this.column);
                        if (statusDouble === "empty") {
                            moves.push([doubleLine, this.column]);
                        }
                    }
                }
            }            
            if (this.column > 0) {
                let statusLeft = this.checkCollision(grid, nextLine, this.column - 1);
                if (statusLeft === "enemy") {
                    moves.push([nextLine, this.column - 1]);
                }
            }

            if (this.column < 7) {
                let statusRight = this.checkCollision(grid, nextLine, this.column + 1);
                if (statusRight === "enemy") {
                    moves.push([nextLine, this.column + 1]);
                }
            }
        }

        return moves;
    }
}