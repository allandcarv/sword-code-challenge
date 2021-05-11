import { ITimer } from './timer.interface';

export interface IGameResult {
  timer: ITimer
  winner?: number;
}
