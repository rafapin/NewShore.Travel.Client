
import { CurrencyType } from '@shared/enums/currency.enum';
import { ICurrencyService } from './icurrency.service';
export class LocalCurrencyService implements ICurrencyService {
    //Update from Google 27 may 2023 15:52 UTC
    listFactorConversion:any[]=[
        { factor: 1, to: CurrencyType.USD },
        { factor: 0.93, to: CurrencyType.EUR },
        { factor: 4446.50, to: CurrencyType.COP },
    ]

    Convert(value: number, currencyType: CurrencyType): number {
        const factor:number = Number(this.listFactorConversion.find(f=> f.to == currencyType)?.factor ?? 0);
        return factor*value;
    }
}