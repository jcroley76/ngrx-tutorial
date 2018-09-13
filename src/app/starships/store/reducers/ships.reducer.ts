import {
  ShipsActions,
  ShipsActionTypes,
  SetShips, SetCurrentShip
} from '../actions/ships.actions';
import { StarShip } from '../../../models/star-ship.model';

export interface State {
  allShips: StarShip[];
  currentShip: StarShip;
}

export const initialState: State = {
  allShips: [],
  currentShip: null
};

export function reducer(state = initialState, action: ShipsActions): State {
  switch (action.type) {
    case ShipsActionTypes.SetShips:
      return handleSetShips(state, action);

    case ShipsActionTypes.SetCurrentShip:
      return handleSetCurrentShip(state, action);

    default:
      return state;
  }
}

function handleSetShips(state, action: SetShips): State {
  return <State>{
    ...state,
    allShips: action.payload
  };
}

function handleSetCurrentShip(state, action: SetCurrentShip): State {
  return <State>{
    ...state,
    currentShip: action.payload
  };
}

export const getAllShips = (state: State) => state.allShips;
export const getCurrentShip = (state: State) => state.currentShip;
