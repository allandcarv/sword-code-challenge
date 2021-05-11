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
})
export default class Statistics extends Vue {
  gameData!: IGameData;

  get totalTime(): string {
    const seconds = this.gameData ? this.gameData.totalTime.seconds : 0;
    const minutes = this.gameData ? this.gameData.totalTime.minutes : 0;
    const hours = this.gameData ? this.gameData.totalTime.hours : 0;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  getGameHistory(index: number): string {
    if (this.gameData) {
      if (this.gameData.gamesPlayed[index - 1] === 1) {
        return 'P1';
      }

      if (this.gameData.gamesPlayed[index - 1] === 2) {
        return 'P2';
      }
    }
    return '';
  }

  getPlayedClass(index: number): string {
    if (this.gameData) {
      if (this.gameData.gamesPlayed[index - 1] === 1) {
        return 'player-1';
      }

      if (this.gameData.gamesPlayed[index - 1] === 2) {
        return 'player-2';
      }
    }

    return '';
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

      return Math.trunc((100 * wins) / gamesPlayed.length) || 0;
    }

    return 0;
  }
}
