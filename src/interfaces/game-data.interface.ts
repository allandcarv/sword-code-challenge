import { IPlayer } from './player.interface';

export interface IGameData {
  type: number;
  firstPlayer: IPlayer;
  secondPlayer: IPlayer;
  totalWins: number;
  gamesPlayed: number;
}
