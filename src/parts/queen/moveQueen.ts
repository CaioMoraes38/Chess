import Piece from "../piece";

export class Queen extends Piece {
    constructor(line: number, column: number, color: string) {
        super(line, column, color);
    }

    calcMove(grid: (Piece | null)[][]) {
        let moves = [];

        // Movimento vertical para cima
        if (this.line > 0) {
            for (let i = this.line - 1; i >= 0; i--) {
                let status = this.checkCollision(grid, i, this.column);
                if (status === "empty") {
                    moves.push([i, this.column]);
                } else if (status === "enemy") {
                    moves.push([i, this.column]);
                    break;
                } else {
                    break;
                }
            }
        }

        // Movimento vertical para baixo
        if (this.line < 7) {
            for (let i = this.line + 1; i <= 7; i++) {
                let status = this.checkCollision(grid, i, this.column);
                if (status === "empty") {
                    moves.push([i, this.column]);
                } else if (status === "enemy") {
                    moves.push([i, this.column]);
                    break;
                } else {
                    break;
                }
            }
        }

        // Movimento horizontal para esquerda
        if (this.column > 0) {
            for (let i = this.column - 1; i >= 0; i--) {
                let status = this.checkCollision(grid, this.line, i);
                if (status === "empty") {
                    moves.push([this.line, i]);
                } else if (status === "enemy") {
                    moves.push([this.line, i]);
                    break;
                } else {
                    break;
                }
            }
        }

        // Movimento horizontal para direita
        if (this.column < 7) {
            for (let i = this.column + 1; i <= 7; i++) {
                let status = this.checkCollision(grid, this.line, i);
                if (status === "empty") {
                    moves.push([this.line, i]);
                } else if (status === "enemy") {
                    moves.push([this.line, i]);
                    break;
                } else {
                    break;
                }
            }
        }

        // Diagonal para cima-esquerda
        if (this.line > 0 && this.column > 0) {
            for (let i = this.line - 1, j = this.column - 1; i >= 0 && j >= 0; i--, j--) {
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

        // Diagonal para cima-direita
        if (this.line > 0 && this.column < 7) {
            for (let i = this.line - 1, j = this.column + 1; i >= 0 && j <= 7; i--, j++) {
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

        // Diagonal para baixo-esquerda
        if (this.line < 7 && this.column > 0) {
            for (let i = this.line + 1, j = this.column - 1; i <= 7 && j >= 0; i++, j--) {
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

        // Diagonal para baixo-direita
        if (this.line < 7 && this.column < 7) {
            for (let i = this.line + 1, j = this.column + 1; i <= 7 && j <= 7; i++, j++) {
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