import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDatePipe'
})
export class DatePipe implements PipeTransform {

  transform(date: Date, ...args: any[]): any {
    return typeof date === 'object' ? date.toLocaleDateString() : new Date(date).toLocaleDateString();
  }
}
