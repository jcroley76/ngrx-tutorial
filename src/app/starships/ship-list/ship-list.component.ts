import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store/reducers';
import * as fromRoot from '../../store/reducers';
import {LoadShips, SetCurrentShip} from '../store/actions/ships.actions';
import { StarShip } from '../../models/star-ship.model';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  starhips$: Observable<StarShip[]>;
  user$: Observable<string>;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.starhips$ = this.store.select(fromStore.getAllShips);
    this.user$ = this.store.select(fromRoot.getFriendlyName);

    this.store.dispatch(new LoadShips());
  }

  setCurrentShip(ship: StarShip) {
    this.store.dispatch(new SetCurrentShip(ship));
  }
}
