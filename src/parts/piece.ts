export default class Piece {
    line: number;
    column: number;
    color: string;
    isAlive: boolean;
    isMoved: boolean;

    constructor(line: number, column: number, color: string) {
        this.line = line;
        this.column = column;
        this.color = color;
        this.isAlive = true; 
        this.isMoved = false;    
    }
        calcMove(grid: (Piece | null)[][]): number[][] {
        return []; 
    }
    checkCollision(grid: (Piece | null)[][], targetLine: number, targetColumn: number) {
        const target = grid[targetLine][targetColumn];
        
        if (target === null) return "empty"; 
        if (target.color !== this.color) return "enemy"; 
        return "friend"; 
    }

}