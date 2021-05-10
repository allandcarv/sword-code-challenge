import { ITimer } from './timer.interface';

export interface IWinnerEvent {
  player: number;
  timer: ITimer
}
