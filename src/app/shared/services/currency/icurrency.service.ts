
import { CurrencyType } from '@shared/enums/currency.enum';
export abstract class ICurrencyService {
    abstract Convert(value:number,currencyType:CurrencyType): number;
}