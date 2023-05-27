import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsListComponent } from './ui/pages/flights-list/flights-list.component';
import { FlightsStartComponent } from './ui/pages/flights-start/flights-start.component';

const routes: Routes = [
  {
    path: '',
    component: FlightsStartComponent,
  },
  {
    path: 'flights',
    component: FlightsListComponent,
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
