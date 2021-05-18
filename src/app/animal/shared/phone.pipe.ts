import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string | undefined, char: string = ' '): string {
    return (value || '').replace(/[^0-9]/g, char);
  }

}
