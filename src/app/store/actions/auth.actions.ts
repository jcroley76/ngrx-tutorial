import { Action } from '@ngrx/store';
import {State} from '../reducers/auth.reducer';

export enum AuthActionTypes {
  LoadAuths = '[Auth] Load Auths',
  SetAuths = '[Auth] Set Auths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;
}

export class SetAuths implements Action {
  readonly type = AuthActionTypes.SetAuths;

  constructor(public payload: State) {}
}

export type AuthActions =
  LoadAuths |
  SetAuths;
