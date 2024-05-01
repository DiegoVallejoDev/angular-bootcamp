import { Pipe, PipeTransform } from '@angular/core';
import { prices } from './data';

const currencySymbols = {
  usd: '$',
  eur: '€',
  gbp: '£',
};

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(values: prices, currency: 'usd' | 'eur' | 'gbp'): string {
    let total = values[currency].toFixed(2);
    let value = values[currency];
    //if value cents are above 50, round up
    if (value % 1 > 0.5) {
      total = Math.ceil(value).toFixed(2);
    }

    return `${currencySymbols[currency]}${total} ${currency.toUpperCase()}`;
  }
}
