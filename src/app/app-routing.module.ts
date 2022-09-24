import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';
import { ShipsComponent } from './ships/ships.component';
import { SpeciesComponent } from './species/species.component';


const routes: Routes = [
  { path: 'species', component: SpeciesComponent },
  { path: 'planets', component: PlanetsComponent },
  // { path: 'ships', component: ShipsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
