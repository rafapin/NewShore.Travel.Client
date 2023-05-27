import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IFlightsRepository } from '@flights/application';
import { FlightsQuery } from '@flights/application/queries/flights-query';
import { Journey, Flight,Transport } from '@flights/domain';
import { CurrencyType } from '@shared/enums/currency.enum';
import { ICurrencyService } from '@shared/services/currency/icurrency.service';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(2000)
      ])
    ])
  ]
})
export class FlightsListComponent {
  flightsRepository = inject(IFlightsRepository);
  currencyService = inject(ICurrencyService);
  journeys!: Journey[];
  currencies: any[]=[];
  flightOptionsForm: FormGroup;
  isLoading:Boolean=false;
  constructor(private formBuilder: FormBuilder) {
    this.flightOptionsForm = this.formBuilder.group({
      origin: ['MDE', [Validators.required,Validators.minLength(3), Validators.maxLength(3)]],
      destination: ['BOG', [Validators.required,Validators.minLength(3), Validators.maxLength(3)]],
      maxNumberFlights: [2, [Validators.required,Validators.min(1), Validators.max(5)]],
      currency:CurrencyType.USD
    });
    const origin = this.flightOptionsForm.get('origin');
    const destination = this.flightOptionsForm.get('destination');
    origin?.valueChanges.subscribe(value => {
      origin.setValue(value.toUpperCase(), { emitEvent: false });
    });
    destination?.valueChanges.subscribe(value => {
      destination.setValue(value.toUpperCase(), { emitEvent: false });
    });
    this.currencies = Object.entries(CurrencyType)
    .filter(([key, value]) => typeof value == 'number')
    .map(([key, value]) =>{
      return {
        value: value,
        label: key
      }
    });
  }
  getflights():void{
    this.isLoading = true;
    const query : FlightsQuery = this.flightOptionsForm.value;
    this.flightsRepository.Get(query).then(response=>{
      this.journeys = response;
      this.isLoading = false;
    }).catch(err => {
      this.journeys= [];
      this.isLoading = false;
    })
  }
  convertToUppercase(value:string) {
    value = value.toUpperCase();
  }
  getConvert(value:number):number{
    return this.currencyService.Convert(value,this.flightOptionsForm.get('currency')?.value)
  }
  getCurrency():string{
    return this.currencies.find(c=> c.value === this.flightOptionsForm.get('currency')?.value).label;
  }
}
