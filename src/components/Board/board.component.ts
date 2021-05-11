/* eslint-disable no-param-reassign */
import { Options, Vue } from 'vue-class-component';

import * as toast from '@/utils/toast';

// Interfaces
import { IGameData } from '@/interfaces/game-data.interface';

// Images
import oBright from '@/assets/images/O_bright.svg';
import oDark from '@/assets/images/O_dark.svg';
import xBright from '@/assets/images/X_bright.svg';
import xDark from '@/assets/images/X_dark.svg';

type GameStatus = 'stopped' | 'started';
@Options({
  name: 'Board',
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
})
export default class Board extends Vue {
  counter = 0;

  gameArray: number[] = []

  gameData!: IGameData;

  gameStatus: GameStatus = 'stopped';

  gameWinnerIndexes!: number[];

  playerOnTurn = 1;

  timer = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  get gameClass(): string {
    switch (this.gameData.type) {
      case 1: return 'game-3';
      case 2: return 'game-4';
      default: return '';
    }
  }

  get totalGamesPlayed(): number {
    if (this.gameData) {
      return this.gameData.totalGamesPlayed;
    }

    return 0;
  }

  get gameSize(): number {
    switch (this.gameData.type) {
      case 1: return 3 * 3;
      case 2: return 4 * 4;
      default: return 0;
    }
  }

  get gameStarted(): boolean {
    return this.gameStatus === 'started';
  }

  get totalTime(): string {
    const { seconds, minutes, hours } = this.timer;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  private checkFirstTypeGame(): boolean {
    let hasWinner = false;
    const indexRange = 3;
    const lastIndex = 3 * 3 - 1;

    for (let i = 0; i <= lastIndex; i += indexRange) {
      const row = this.gameArray.slice(i, i + indexRange);

      if (row.every((player) => player === this.playerOnTurn)) {
        hasWinner = true;
        const indexes = Array.from({ length: 3 }, (_, idx) => i + idx);
        this.setWinner(indexes);
        break;
      }
    }

    if (!hasWinner) {
      for (let i = 0; i < indexRange; i += 1) {
        const column = [
          this.gameArray[i],
          this.gameArray[i + indexRange],
          this.gameArray[i + indexRange * 2]];

        if (column.every((player) => player === this.playerOnTurn)) {
          hasWinner = true;
          const indexes = [i, i + indexRange, i + indexRange * 2];
          this.setWinner(indexes);
          break;
        }
      }
    }

    if (!hasWinner) {
      const firstDiagonal = [
        this.gameArray[0],
        this.gameArray[4],
        this.gameArray[8],
      ];

      if (firstDiagonal.every((player) => player === this.playerOnTurn)) {
        hasWinner = true;
        const indexes = [0, 4, 8];
        this.setWinner(indexes);
      }
    }

    if (!hasWinner) {
      const secondDiagonal = [
        this.gameArray[2],
        this.gameArray[4],
        this.gameArray[6],
      ];

      if (secondDiagonal.every((player) => player === this.playerOnTurn)) {
        hasWinner = true;
        const indexes = [2, 4, 6];
        this.setWinner(indexes);
      }
    }

    const lastMove = this.gameArray.every((index) => index !== 0);

    if (lastMove && !hasWinner) {
      toast.info('Draw Game');
      this.stopGame();
      this.emitGameResult();
    }

    return hasWinner;
  }

  private checkSecondTypeGame(): boolean {
    let hasWinner = false;
    const indexRange = 4;
    const lastIndex = 4 * 4 - 1;

    for (let i = 0; i <= lastIndex; i += indexRange) {
      const row = this.gameArray.slice(i, i + indexRange);

      if (row.every((player) => player === this.playerOnTurn)) {
        hasWinner = true;
        const indexes = Array.from({ length: 4 }, (_, idx) => i + idx);
        this.setWinner(indexes);
        break;
      }
    }

    if (!hasWinner) {
      for (let i = 0; i < indexRange; i += 1) {
        const column = [
          this.gameArray[i],
          this.gameArray[i + indexRange],
          this.gameArray[i + indexRange * 2],
          this.gameArray[i + indexRange * 3]];

        if (column.every((player) => player === this.playerOnTurn)) {
          hasWinner = true;
          const indexes = [
            i,
            i + indexRange,
            i + indexRange * 2,
            i + indexRange * 3,
          ];
          this.setWinner(indexes);
          break;
        }
      }
    }

    if (!hasWinner) {
      const firstDiagonal = [
        this.gameArray[0],
        this.gameArray[5],
        this.gameArray[10],
        this.gameArray[15],
      ];

      if (firstDiagonal.every((player) => player === this.playerOnTurn)) {
        hasWinner = true;
        const indexes = [0, 5, 10, 15];
        this.setWinner(indexes);
      }
    }

    if (!hasWinner) {
      const secondDiagonal = [
        this.gameArray[3],
        this.gameArray[6],
        this.gameArray[9],
        this.gameArray[12],
      ];

      if (secondDiagonal.every((player) => player === this.playerOnTurn)) {
        hasWinner = true;
        const indexes = [3, 6, 9, 12];
        this.setWinner(indexes);
      }
    }

    const lastMove = this.gameArray.every((index) => index !== 0);

    if (lastMove && !hasWinner) {
      toast.info('Draw Game');
      this.stopGame();
    }

    return hasWinner;
  }

  getGameType(): number {
    return this.gameData.type;
  }

  getPlayerName(player: number): string {
    if (this.gameData) {
      const { firstPlayer, secondPlayer } = this.gameData;

      if (player === 1) {
        return firstPlayer.name;
      }

      if (player === 2) {
        return secondPlayer.name;
      }
    }

    return '';
  }

  checkWinner(): boolean {
    const gameType = this.gameData.type;

    if (gameType === 1) {
      return this.checkFirstTypeGame();
    }

    if (gameType === 2) {
      return this.checkSecondTypeGame();
    }

    return false;
  }

  emitGameResult(hasWinner?: boolean): void {
    this.$emit('gameResult', {
      winner: hasWinner ? this.playerOnTurn : 0,
      timer: this.timer,
    });
  }

  setGameType(type: number): void {
    this.stopGame();

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

  registerMove(index: number): void {
    if (this.gameStatus === 'started') {
      if (!this.gameArray[index]) {
        this.gameArray[index] = this.playerOnTurn;

        const hasWinner = this.checkWinner();

        if (!hasWinner) this.playerOnTurn = this.playerOnTurn === 1 ? 2 : 1;
      }
    }
  }

  setGame(): void {
    if (this.gameStatus === 'started') {
      this.stopGame();
    } else {
      this.startGame();
    }
  }

  setWinner(indexes: number[]): void {
    toast.info(`${this.getPlayerName(this.playerOnTurn)} wins`);
    this.gameWinnerIndexes = [...indexes];
    this.stopGame();
    this.emitGameResult(true);
  }

  startCounter(): void {
    this.timer.seconds = 0;
    this.timer.minutes = 0;
    this.timer.hours = 0;

    this.counter = setInterval(() => {
      if (this.timer.seconds === 59) {
        if (this.timer.minutes === 59) {
          this.timer.hours += 1;
          this.timer.minutes = 0;
          this.timer.seconds = 0;
        } else {
          this.timer.minutes += 1;
          this.timer.seconds = 0;
        }
      } else {
        this.timer.seconds += 1;
      }
    }, 1000);
  }

  startGame(): void {
    this.gameArray = this.gameData.type === 1
      ? new Array(9).fill(0)
      : new Array(16).fill(0);

    this.gameWinnerIndexes = this.gameData.type === 1
      ? new Array(3).fill(-1)
      : new Array(4).fill(-1);

    this.playerOnTurn = 1;

    this.gameStatus = 'started';

    this.$emit('gameStarted');

    this.startCounter();
  }

  stopGame(): void {
    this.gameStatus = 'stopped';

    clearInterval(this.counter);
  }
}
