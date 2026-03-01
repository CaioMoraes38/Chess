# ♟️ Chess 

Um projeto de simulador de xadrez desenvolvido em **TypeScript** com foco em implementar as regras de movimento de cada peça.

## 📋 Estrutura do Projeto

```
Chess/
├── src/
│   ├── index.ts                 # Arquivo principal com simulações
│   ├── board/
│   │   └── boardChess.ts       # Classe do tabuleiro (8x8)
│   └── parts/
│       ├── piece.ts             # Classe base para todas as peças
│       ├── bishop/
│       │   └── moveBishop.ts    # Classe do Bispo
│       ├── king/
│       │   └── moveKing.ts      # Classe do Rei
│       ├── knight/
│       │   └── moveKnight.ts    # Classe do Cavalo
│       ├── pawn/
│       │   └── movePawn.ts      # Classe do Peão ✅
│       ├── queen/
│       │   └── moveQueen.ts     # Classe da Rainha
│       └── rook/
│           └── moveRook.ts      # Classe da Torre
├── package.json
└── README.md                     # Este arquivo
```

---

## 🎯 O que foi Implementado

### ✅ Classe Base `Piece`
Toda peça herda desta classe e possui:
- `line` (linha) e `column` (coluna) - posição no tabuleiro
- `color` (branco ou preto)
- `isAlive` - se a peça está viva
- `isMoved` - se a peça já foi movida (importante para peões)

### ✅ Classe `Pawn` (Peão)
Implementada com as **regras corretas de xadrez**:

#### 📍 Movimentos disponíveis:
1. **Primeira vez**: Pode mover **2 casas** para frente
2. **Após primeira vez**: Só pode mover **1 casa** para frente
3. **Captura**: Pode capturar na **diagonal** (1 casa)

#### 🔍 Código da classe:
```typescript
calcMove(){
    let direction = this.color == "white" ? -1 : 1;
    let moves = [];

    // Se ainda não foi movido, pode ir 2 casas
    if(this.isMoved == false){
        moves.push([this.line + 2 * direction, this.column]);
    };  
        // 1 casa para frente
        moves.push([this.line + direction, this.column]);
        // Captura diagonal esquerda
        moves.push([this.line + direction, this.column - 1]);
        // Captura diagonal direita
        moves.push([this.line + direction, this.column + 1]);
    
    return moves;
}
```

### ✅ Tabuleiro `BoardChess`
- Grid **8x8** onde as peças são posicionadas
- Inicializa com todas as peças em suas posições corretas
- Peças brancas na linha 0 (e peões na linha 1)
- Peças pretas na linha 7 (e peões na linha 6)

### ✅ Função `moverPeca()`
Responsável por:
- ✔️ Validar se a posição está dentro do tabuleiro (0-7)
- ✔️ Verificar se o espaço está vazio
- ✔️ Remover peça da posição antiga
- ✔️ Atualizar coordenadas do peão
- ✔️ Marcar peão como "já movido"
- ✔️ Colocar peça na nova posição
- ✔️ Retornar sucesso/falha

---

## 🚀 Como Usar

### Instalação
```bash
npm install
```

### Executar a simulação
```bash
npm run dev
```

Isso vai compilar o TypeScript e executar a simulação no console.

---

## 📊 Exemplo de Simulação

Quando você executa `npm run dev`, o console mostra:

```
========== TABULEIRO INICIAL ==========

┌─────────┬──────────┬────────┬──────┬──────┬──────┬──────┬────────┬──────────┐
│ (index) │ 0        │ 1      │ 2    │ 3    │ 4    │ 5    │ 6      │ 7        │
├─────────┼──────────┼────────┼──────┼──────┼──────┼──────┼────────┼──────────┤
│ 0       │ [Rook]   │ [Pawn] │ null │ null │ null │ null │ [Pawn] │ [Rook]   │
│ 1       │ [Knight] │ [Pawn] │ null │ null │ null │ null │ [Pawn] │ [Knight] │
│ 2       │ [Bishop] │ [Pawn] │ null │ null │ null │ null │ [Pawn] │ [Bishop] │
...
└─────────┴──────────┴────────┴──────┴──────┴──────┴──────┴────────┴──────────┘

========== TESTE COM PEÕES CUSTOMIZADOS ==========

🔍 Peão Branco posicionado em linha 4, coluna 3
📍 Posição: Linha 4, Coluna 3
✋ Já foi movido? false

📋 Movimentos possíveis:
   1. Linha 2, Coluna 3
   2. Linha 3, Coluna 3
   3. Linha 3, Coluna 2
   4. Linha 3, Coluna 4

➡️  Tentando mover peão para: Linha 3, Coluna 3
✅ Movimento realizado com sucesso!
```

---

## 🎮 Como Customizar a Simulação

### 1️⃣ Mudar a posição inicial do peão
No arquivo `src/index.ts`:
```typescript
const peonTesteB = new Pawn(4, 3, 'white');  // Linha 4, Coluna 3
meuTabuleiro.grid[4][3] = peonTesteB;
```

### 2️⃣ Escolher qual movimento usar
```typescript
// Índice dos movimentos disponíveis:
movimentosPossiveis[0]  // Movimento de 2 casas (primeira vez)
movimentosPossiveis[1]  // Movimento de 1 casa para frente
movimentosPossiveis[2]  // Captura diagonal esquerda
movimentosPossiveis[3]  // Captura diagonal direita

// Exemplo: mover 2 casas
moverPeca(peonTesteB, movimentosPossiveis[0][0], movimentosPossiveis[0][1]);
```

### 3️⃣ Testar múltiplos peões
```typescript
const peon1 = new Pawn(5, 2, 'white');
const peon2 = new Pawn(4, 4, 'black');

meuTabuleiro.grid[5][2] = peon1;
meuTabuleiro.grid[4][4] = peon2;

moverPeca(peon1, 4, 2);
moverPeca(peon2, 5, 4);
```

---

## 📝 Regras do Peão Implementadas

| Situação | Movimento |
|----------|-----------|
| Primeira vez | 2 casas para frente OU 1 casa |
| Após primeiro movimento | Apenas 1 casa para frente |
| Captura | Diagonal para frente (esquerda ou direita) |
| Direção (Branco) | Para cima (linha decresce) |
| Direção (Preto) | Para baixo (linha cresce) |

---

## 🔄 Fluxo de Movimento

```
┌─────────────────┐
│  Peão criado    │
│  isMoved = false│
└────────┬────────┘
         │
         ▼
┌─────────────────────────┐
│  calcMove() é chamado   │
│  Retorna 4 movimentos   │
│  (2 casas + diagonal)   │
└────────┬────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│  moverPeca() valida o movimento     │
│  - Dentro do tabuleiro?             │
│  - Espaço vazio?                    │
└────────┬────────────────────────────┘
         │
    ┌────┴─────┐
    │           │
    ▼           ▼
  ❌ Falha    ✅ Sucesso
              └─┬──────────────┐
                │              ▼
                │     ┌──────────────────┐
                │     │ isMoved = true   │
                │     │ Grid atualizado  │
                │     │ Novo movimento   │
                │     │ = 1 casa apenas  │
                │     └──────────────────┘
```

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** - Linguagem de programação com tipagem
- **TSX** - Executor de TypeScript em tempo real
- **Node.js** - Runtime JavaScript

---

## 📌 Próximas Funcionalidades a Implementar

- [ ] Movimento do Bispo
- [ ] Movimento da Torre
- [ ] Movimento do Cavalo
- [ ] Movimento da Rainha
- [ ] Movimento do Rei
- [ ] Validação de xeque
- [ ] Sistema de turno (branco vs preto)
- [ ] Interface gráfica

---

## 📧 Autor

Projeto de estudo de Xadrez em TypeScript

**Última atualização:** Fevereiro 28, 2026
