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
        this.pieces.push(new Rook( 0, 0, 'white'))
        this.pieces.push(new Knight( 1, 0, 'white'))
        this.pieces.push(new Bishop( 2, 0, 'white'))
        this.pieces.push(new Queen( 3, 0, 'white'))
        this.pieces.push(new King( 4, 0, 'white'))
        this.pieces.push(new Bishop( 5, 0, 'white'))
        this.pieces.push(new Knight( 6, 0, 'white'))
        this.pieces.push(new Rook( 7, 0, 'white'))
        for (let i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(  i, 1, 'white'))
            for (let p of this.pieces) {
            this.grid[p.line][p.column] = p;
        }
        }
        
        this.pieces.push(new Rook( 0, 7, 'black'))
        this.pieces.push(new Knight( 1, 7, 'black'))
        this.pieces.push(new Bishop( 2, 7, 'black'))
        this.pieces.push(new Queen( 3, 7, 'black'))
        this.pieces.push(new King( 4, 7, 'black'))
        this.pieces.push(new Bishop( 5, 7, 'black'))
        this.pieces.push(new Knight( 6, 7, 'black'))
        this.pieces.push(new Rook( 7, 7, 'black'))
        for (let i = 0; i < 8; i++) {
            this.pieces.push(new Pawn(  i, 6, 'black'))
            for (let p of this.pieces) {
            this.grid[p.line][p.column] = p;
        }
        }
}
}
