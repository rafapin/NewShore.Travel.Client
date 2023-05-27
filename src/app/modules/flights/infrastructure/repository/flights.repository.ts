import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Journey } from '@flights/domain';
import { FlightsQuery } from '@flights/application/queries/flights-query';
import { environment } from '@environments/enviroments';
import { HttpService } from '@shared/services/http.service';
import { IFlightsRepository } from '@flights/application';

@Injectable({
  providedIn: 'root'
})
export class FlightsRepository implements IFlightsRepository{
  http = inject(HttpService)
  baseUrl = environment.baseUrl+"/Flights";
    Get(query: FlightsQuery): Promise<Journey[]> {
      const queryString = `Origin=${query.origin}&Destination=${query.destination}&maxNumberFlights=${query.maxNumberFlights}`;
      return this.http.get<Journey[]>(`${this.baseUrl}/get?${queryString}`);
    }
}
