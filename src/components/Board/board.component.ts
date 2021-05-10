/* eslint-disable no-param-reassign */
import { Options, Vue } from 'vue-class-component';

// Interfaces
import { IGameData } from '@/interfaces/game-data.interface';

// Images
import oBright from '@/assets/images/O_bright.svg';
import oDark from '@/assets/images/O_dark.svg';
import xBright from '@/assets/images/X_bright.svg';
import xDark from '@/assets/images/X_dark.svg';

type GameStatus = 'paused' | 'stopped' | 'started';
@Options({
  name: 'Board',
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  watch: {
    gameData: {
      deep: true,
      handler(gameData) {
        this.gameArray = gameData.type === 1 ? new Array(9).fill(0) : new Array(16).fill(0);
        this.gameWinnerIndexes = gameData.type === 1
          ? new Array(3).fill(-1)
          : new Array(4).fill(-1);
      },
    },
  },
})
export default class Board extends Vue {
  gameArray = new Array(9).fill(0);

  gameData!: IGameData;

  gameStatus: GameStatus = 'started';

  gameWinnerIndexes = new Array(3).fill(-1);

  playerOnTurn = 1;

  get gameClass(): string {
    switch (this.gameData.type) {
      case 1: return 'game-3';
      case 2: return 'game-4';
      default: return '';
    }
  }

  get gameSize(): number {
    switch (this.gameData.type) {
      case 1: return 3 * 3;
      case 2: return 4 * 4;
      default: return 0;
    }
  }

  private checkFirstTypeGame(): void {
    const indexRange = 3;
    const lastIndex = 3 * 3 - 1;

    for (let i = 0; i <= lastIndex; i += indexRange) {
      const row = this.gameArray.slice(i, i + indexRange);

      if (row.every((player) => player === this.playerOnTurn)) {
        alert(`player ${this.playerOnTurn} wins`);
        const indexes = Array.from({ length: 3 }, (_, idx) => i + idx);
        this.gameWinnerIndexes = [...indexes];
        this.gameStatus = 'stopped';
        break;
      }
    }

    for (let i = 0; i < indexRange; i += 1) {
      const column = [
        this.gameArray[i],
        this.gameArray[i + indexRange],
        this.gameArray[i + indexRange * 2]];

      if (column.every((player) => player === this.playerOnTurn)) {
        alert(`player ${this.playerOnTurn} wins`);
        this.gameWinnerIndexes = [i, i + indexRange, i + indexRange * 2];
        this.gameStatus = 'stopped';
        break;
      }
    }

    const firstDiagonal = [
      this.gameArray[0],
      this.gameArray[4],
      this.gameArray[8],
    ];

    if (firstDiagonal.every((player) => player === this.playerOnTurn)) {
      alert(`player ${this.playerOnTurn} wins`);
      this.gameWinnerIndexes = [0, 4, 8];
      this.gameStatus = 'stopped';
    }

    const secondDiagonal = [
      this.gameArray[2],
      this.gameArray[4],
      this.gameArray[6],
    ];

    if (secondDiagonal.every((player) => player === this.playerOnTurn)) {
      alert(`player ${this.playerOnTurn} wins`);
      this.gameWinnerIndexes = [2, 4, 6];
      this.gameStatus = 'stopped';
    }
  }

  private checkSecondTypeGame(): void {
    const indexRange = 4;
    const lastIndex = 4 * 4 - 1;

    for (let i = 0; i <= lastIndex; i += indexRange) {
      const row = this.gameArray.slice(i, i + indexRange);

      if (row.every((player) => player === this.playerOnTurn)) {
        alert(`player ${this.playerOnTurn} wins`);
        const indexes = Array.from({ length: 4 }, (_, idx) => i + idx);
        this.gameWinnerIndexes = [...indexes];
        this.gameStatus = 'stopped';
        break;
      }
    }

    for (let i = 0; i < indexRange; i += 1) {
      const column = [
        this.gameArray[i],
        this.gameArray[i + indexRange],
        this.gameArray[i + indexRange * 2],
        this.gameArray[i + indexRange * 3]];

      if (column.every((player) => player === this.playerOnTurn)) {
        alert(`player ${this.playerOnTurn} wins`);
        this.gameWinnerIndexes = [
          i,
          i + indexRange,
          i + indexRange * 2,
          i + indexRange * 3,
        ];
        this.gameStatus = 'stopped';
        break;
      }
    }

    const firstDiagonal = [
      this.gameArray[0],
      this.gameArray[5],
      this.gameArray[10],
      this.gameArray[15],
    ];

    if (firstDiagonal.every((player) => player === this.playerOnTurn)) {
      alert(`player ${this.playerOnTurn} wins`);
      this.gameWinnerIndexes = [0, 5, 10, 15];
      this.gameStatus = 'stopped';
    }

    const secondDiagonal = [
      this.gameArray[3],
      this.gameArray[6],
      this.gameArray[9],
      this.gameArray[12],
    ];

    if (secondDiagonal.every((player) => player === this.playerOnTurn)) {
      alert(`player ${this.playerOnTurn} wins`);
      this.gameWinnerIndexes = [3, 6, 9, 12];
      this.gameStatus = 'stopped';
    }
  }

  getGameType(): number {
    return this.gameData.type;
  }

  getWinner(): void {
    const gameType = this.gameData.type;

    if (gameType === 1) {
      this.checkFirstTypeGame();
    }

    if (gameType === 2) {
      this.checkSecondTypeGame();
    }
  }

  setGameType(type: number): void {
    this.$emit('gameType', type);
  }

  getPlayerImage(index: number): string {
    const player = this.gameArray ? this.gameArray[index] : 0;

    switch (player) {
      case 1: return this.gameWinnerIndexes.includes(index) ? xBright : xDark;
      case 2: return this.gameWinnerIndexes.includes(index) ? oBright : oDark;
      default: return '';
    }
  }

  setPlayer(index: number): void {
    if (this.gameStatus === 'started') {
      this.gameArray[index] = this.playerOnTurn;
      this.getWinner();
      this.playerOnTurn = this.playerOnTurn === 1 ? 2 : 1;
    }
  }
}
