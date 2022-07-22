import { Pipe, PipeTransform } from '@angular/core';
import { Colour } from '../models/colour';

@Pipe({
  name: 'filterColour'
})
export class FilterColourPipe implements PipeTransform {

  transform(value: Colour[], filterColourText:string): Colour[] {
    filterColourText=filterColourText?filterColourText.toLocaleLowerCase():""
    return filterColourText?
    value.filter((colour:Colour)=>colour.colourName.toLocaleLowerCase().indexOf(filterColourText)!==-1)
    :value;
  }
}
