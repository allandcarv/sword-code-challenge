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

  getGameType(): number {
    return this.gameData.type;
  }

  setGameType(type: number): void {
    this.$emit('gameType', type);
  }
}
