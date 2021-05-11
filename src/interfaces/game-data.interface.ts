import { IPlayer } from './player.interface';
import { ITimer } from './timer.interface';

export interface IGameData {
  type: number;
  firstPlayer: IPlayer;
  secondPlayer: IPlayer;
  totalWins: number;
  gamesPlayed: number;
  totalGamesPlayed: number;
  hasWinner: boolean;
  totalTime: ITimer
}
