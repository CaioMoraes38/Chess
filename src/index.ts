import BoardChess from './board/boardChess';

const meuTabuleiro = new BoardChess();

console.log("============== ESTADO INICIAL ==============");
console.table(meuTabuleiro.grid);

// 1. Tenta mover a Torre (Linha 0, Coluna 0) para a frente (Linha 3, Coluna 0).
// O Peão está na frente dela em [1,0], então o jogo DEVE BLOQUEAR!
console.log("\n---> Tentando mover a Torre [0,0] para [3,0]...");
meuTabuleiro.movePiece(0, 0, 3, 0);

// 2. Move o Peão que está na frente da Torre [1,0] para [3,0] (pulo duplo liberado!)
console.log("\n---> Peão em [1,0] faz pulo duplo para [3,0] abrindo caminho!");
meuTabuleiro.movePiece(1, 0, 3, 0);

console.log("\n---> Tentando mover a Torre de novo para [2,0]...");
meuTabuleiro.movePiece(0, 0, 2, 0);
meuTabuleiro.movePiece(2, 0, 2, 3);
meuTabuleiro.movePiece(2, 3, 6, 3);
meuTabuleiro.movePiece(6, 3, 1, 3);






console.log("\n============== TABULEIRO FINAL ==============");
console.table(meuTabuleiro.grid);