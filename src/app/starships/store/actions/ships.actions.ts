import { StarShip } from './../../../models/star-ship.model';
import { Action } from '@ngrx/store';

export enum ShipsActionTypes {
  LoadShips = '[Ships] Load Ships',
  SetShips = '[Ships] Set Ships',
  SetCurrentShip = '[Ships] Set Current Ship'
}

export class LoadShips implements Action {
  readonly type = ShipsActionTypes.LoadShips;
}

export class SetShips implements Action {
  readonly type = ShipsActionTypes.SetShips;

  constructor(public payload: StarShip[]) {}
}

export class SetCurrentShip implements Action {
  readonly type = ShipsActionTypes.SetCurrentShip;

  constructor(public payload: StarShip) {}
}

export type ShipsActions =
  LoadShips |
  SetShips |
  SetCurrentShip;
