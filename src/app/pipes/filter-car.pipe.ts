import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText
    ?value.filter((car:Car)=>car.brandName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}
