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
}
