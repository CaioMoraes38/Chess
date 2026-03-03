import Piece from "../piece";

export class King extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }

    calcMove(grid: (Piece | null)[][]) {
        let moves = [];
        if (this.line > 0) {
            let status = this.checkCollision(grid, this.line - 1, this.column);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line - 1, this.column]);
            }
        }
        if (this.line < 7) {
            let status = this.checkCollision(grid, this.line + 1, this.column);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line + 1, this.column]);
            }
        }
        if (this.column > 0) {
            let status = this.checkCollision(grid, this.line, this.column - 1);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line, this.column - 1]);
            }
        }
        if (this.column < 7) {
            let status = this.checkCollision(grid, this.line, this.column + 1);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line, this.column + 1]);
            }
        }
        if (this.line > 0 && this.column > 0) {
            let status = this.checkCollision(grid, this.line - 1, this.column - 1);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line - 1, this.column - 1]);

            }
        }
        if (this.line > 0 && this.column < 7) {
            let status = this.checkCollision(grid, this.line - 1, this.column + 1);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line - 1, this.column + 1]);
            }
        }
        if (this.line < 7 && this.column > 0) {
            let status = this.checkCollision(grid, this.line + 1, this.column - 1);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line + 1, this.column - 1]);
            }
        }
        if (this.line < 7 && this.column < 7) {
            let status = this.checkCollision(grid, this.line + 1, this.column + 1);
            if (status === "empty" || status === "enemy") {
                moves.push([this.line + 1, this.column + 1]);
            }
        }
        return moves;
    }

}

