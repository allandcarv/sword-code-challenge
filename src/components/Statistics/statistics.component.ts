import { Options, Vue } from 'vue-class-component';

import { IGameData } from '@/interfaces/game-data.interface';

@Options({
  name: 'Statistics',
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
        const { firstPlayer, secondPlayer } = gameData;

        if (firstPlayer.wins > this.p1) {
          this.winHistory.push('P1');
          this.p1 = firstPlayer.wins;
        }

        if (secondPlayer.wins > this.p2) {
          this.winHistory.push('P2');
          this.p2 = secondPlayer.wins;
        }
      },
    },
  },
})
export default class Statistics extends Vue {
  gameData!: IGameData;

  p1 = 0;

  p2 = 0;

  winHistory = [];

  get totalTime(): string {
    const seconds = this.gameData ? this.gameData.totalTime.seconds : 0;
    const minutes = this.gameData ? this.gameData.totalTime.minutes : 0;
    const hours = this.gameData ? this.gameData.totalTime.hours : 0;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  getGameHistory(index: number): void {
    return (this.winHistory[index - 1]);
  }

  getPlayedClass(index: number): boolean {
    if (this.gameData) return index <= this.gameData.gamesPlayed;

    return false;
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

  getPercentPlayer(player: number): number {
    if (this.gameData) {
      const { firstPlayer, secondPlayer, gamesPlayed } = this.gameData;
      let wins = 0;

      if (player === 1) {
        wins = firstPlayer.wins;
      }

      if (player === 2) {
        wins = secondPlayer.wins;
      }

      return Math.trunc((100 * wins) / gamesPlayed) || 0;
    }

    return 0;
  }
}
