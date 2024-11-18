import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendPipe',
})
export class Append1Pipe implements PipeTransform {
  transform(value: string, appendText: string): string {
    if (value === '' || value === null) return value;
    else return value + ' ' + appendText;
  }
}
