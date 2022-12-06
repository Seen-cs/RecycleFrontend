import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCarbonPrice'
})
export class ConvertCarbonPricePipe implements PipeTransform {

  transform(value: number): number {
    return value*100000000;
  }

}
