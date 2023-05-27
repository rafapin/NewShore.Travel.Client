import { Journey } from "@flights/domain";
import { FlightsQuery } from './../queries/flights-query';

export abstract class IFlightsRepository {
    abstract Get(query:FlightsQuery): Promise<Journey[]>;
}