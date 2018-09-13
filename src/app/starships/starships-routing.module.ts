import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailComponent } from './ship-details/ship-detail.component';

const starshipRoutes: Routes = [
  { path: '', component: ShipListComponent },
  { path: ':shipName/detail', component: ShipDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(starshipRoutes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule {}
