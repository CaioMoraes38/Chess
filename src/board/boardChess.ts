import Piece from '../parts/piece'
import {Queen} from '../parts/queen/moveQueen'
import {Rook} from '../parts/rook/moveRook'
import {Bishop} from '../parts/bishop/moveBishop'
import {Knight} from '../parts/knight/moveKnight'
import {Pawn} from '../parts/pawn/movePawn'
import { King } from '../parts/king/moveKing'

export default class BoardChess {
    pieces: Piece[] = []
    grid: (Piece | null)[][] = Array(8).fill(null).map(() => Array(8).fill(null))
    
   constructor() {
        this.pieces.push(new Rook(0, 0, 'white'));
        this.pieces.push(new Knight(0, 1, 'white'));
        this.pieces.push(new Bishop(0, 2, 'white'));
        this.pieces.push(new Queen(0, 3, 'white'));
        this.pieces.push(new King(0, 4, 'white'));
        this.pieces.push(new Bishop(0, 5, 'white'));
        this.pieces.push(new Knight(0, 6, 'white'));
        this.pieces.push(new Rook(0, 7, 'white'));
        
        for (let i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(1, i, 'white')); 
        }
        
        this.pieces.push(new Rook(7, 0, 'black'));
        this.pieces.push(new Knight(7, 1, 'black'));
        this.pieces.push(new Bishop(7, 2, 'black'));
        this.pieces.push(new Queen(7, 3, 'black'));
        this.pieces.push(new King(7, 4, 'black'));
        this.pieces.push(new Bishop(7, 5, 'black'));
        this.pieces.push(new Knight(7, 6, 'black'));
        this.pieces.push(new Rook(7, 7, 'black'));
        
        for (let i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(6, i, 'black')); 
        }

        for (let p of this.pieces) {
            this.grid[p.line][p.column] = p;
        }
    }

   movePiece(fromLine: number, fromColumn: number, toLine: number, toColumn: number) {
        const pieceToMove = this.grid[fromLine][fromColumn];

        if (pieceToMove !== null) {
            const allowedMoves = pieceToMove.calcMove(this.grid);

            let isValidMove = false;
            for (const move of allowedMoves) {
                if (move[0] === toLine && move[1] === toColumn) {
                    isValidMove = true;
                    break; 
                }
            }

            if (isValidMove) {
                this.grid[toLine][toColumn] = pieceToMove;            
                this.grid[fromLine][fromColumn] = null;
                pieceToMove.line = toLine;
                pieceToMove.column = toColumn;
                pieceToMove.isMoved = true;

                console.log(`✅ SUCESSO: ${pieceToMove.constructor.name} moveu para [${toLine}, ${toColumn}]!`);
            } else {
                console.log(`❌ ERRO: Movimento bloqueado para ${pieceToMove.constructor.name}. Caminho ocupado ou movimento inválido!`);
            }
        } else {
            console.log("⚠️ Erro: Não há nenhuma peça na posição de origem.");
        }
    }
} 