import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsListComponent } from './ui/pages/flights-list/flights-list.component';
import { IFlightsRepository, FlightsRepository } from '.';
import { SharedModule } from '../../shared/shared.module';
import { FlightsStartComponent } from './ui/pages/flights-start/flights-start.component';


@NgModule({
  declarations: [
    FlightsListComponent,
    FlightsStartComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    SharedModule,
  ],
  providers:[
    {provide: IFlightsRepository, useClass: FlightsRepository}
  ]
})
export class FlightsModule { }
