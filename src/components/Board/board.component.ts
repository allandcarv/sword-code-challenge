import { Options, Vue } from 'vue-class-component';

// Interfaces
import { IGameData } from '@/interfaces/game-data.interface';

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
  gameData!: IGameData;

  get gameSize(): number {
    switch (this.gameData.type) {
      case 1: return 3 * 3;
      case 2: return 4 * 4;
      default: return 0;
    }
  }

  get gameClass(): string {
    switch (this.gameData.type) {
      case 1: return 'game-3';
      case 2: return 'game-4';
      default: return '';
    }
  }

  getGameType(): number {
    return this.gameData.type;
  }

  setGameType(type: number): void {
    this.$emit('gameType', type);
  }
}
