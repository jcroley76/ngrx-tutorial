import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShipsActionTypes } from '../actions/ships.actions';
import { switchMap, map } from 'rxjs/operators';
import * as shipActions from '../actions/ships.actions';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShipsEffects {

  @Effect()
  loadShips$ = this.actions$.pipe(
    ofType(ShipsActionTypes.LoadShips),
    switchMap(() => {
      return this.http.get<any>(`https://swapi.co/api/starships`)
        .pipe(
          map((response) => {
            console.log('ShipsEffects', response.results);
            return new shipActions.SetShips(response.results);
          })
        );
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
