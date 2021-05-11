import { Options, Vue } from 'vue-class-component';

// Components
import Board from '@/components/Board/board.component.vue';
import Profile from '@/components/Profile/profile.component.vue';
import Statistics from '@/components/Statistics/statistics.component.vue';

// Interfaces
import { IGameData } from '@/interfaces/game-data.interface';
import { IProfile } from '@/interfaces/profile.interface';
import { IGameResult } from '@/interfaces/game-result-event.interface';

import profilePhoto from '@/assets/images/thanos.jpg';
import { ITimer } from '@/interfaces/timer.interface';

@Options({
  name: 'Game',
  components: {
    Board,
    Profile,
    Statistics,
  },
})
export default class Game extends Vue {
  playerProfile: IProfile = {
    photoImage: profilePhoto,
    playerName: 'Thanos, The Mad Titan',
    playerAge: 1000,
    playerLocation: 'The Moon Titan',
    playerOccupation: 'Warlord from Titan',
    playerAboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet volutpat diam, eget euismod leo. Phasellus vel facilisis magna. Etiam sit amet sapien diam. Curabitur semper ipsum sit amet lectus posuere, a egestas libero fringilla. Praesent nec iaculis urna, id tristique enim. Quisque a blandit turpis. Mauris arcu nunc, viverra in enim quis, ultrices porta nulla. Curabitur eros erat, lacinia vel ipsum eget, tincidunt egestas lorem. Nullam libero nibh, mattis eu mauris quis, rutrum ultricies massa.',
  }

  gameData: IGameData = {
    type: 1,
    firstPlayer: {
      name: 'Player 1',
      wins: 0,
    },
    secondPlayer: {
      name: 'Player 2',
      wins: 0,
    },
    gamesPlayed: 0,
    totalGamesPlayed: 0,
    totalWins: 5,
    totalTime: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
    hasWinner: false,
  }

  handleGameStarted(): void {
    if (this.gameData.hasWinner) {
      this.gameData.hasWinner = false;

      this.gameData.gamesPlayed = 0;

      this.gameData.firstPlayer.wins = 0;

      this.gameData.secondPlayer.wins = 0;
    }
  }

  setGameType(type: number): void {
    this.gameData.type = type;
  }

  handleGameResult(event: IGameResult): void {
    const { firstPlayer, secondPlayer } = this.gameData;

    if (event?.winner === 1) this.gameData.firstPlayer.wins += 1;

    if (event?.winner === 2) this.gameData.secondPlayer.wins += 1;

    if (event.winner) this.gameData.gamesPlayed += 1;

    this.gameData.totalGamesPlayed += 1;

    this.setTotalTime(event.timer);

    if (firstPlayer.wins === 5 || secondPlayer.wins === 5) {
      this.gameData.hasWinner = true;

      const el = this.$el.querySelector('.statistics');

      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setTotalTime(timer: ITimer): void {
    let seconds = timer.seconds + this.gameData.totalTime.seconds;
    let minutes = timer.minutes + this.gameData.totalTime.minutes;
    let hours = timer.hours + this.gameData.totalTime.hours;

    if (seconds >= 60) {
      minutes += Math.trunc(seconds / 60);
      seconds %= 60;
    }

    if (minutes >= 60) {
      hours += Math.trunc(minutes / 60);
      minutes %= 60;
    }

    this.gameData.totalTime.seconds = seconds;
    this.gameData.totalTime.minutes = minutes;
    this.gameData.totalTime.hours = hours;
  }
}
