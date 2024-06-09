import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateUTC'
})
export class DateUTCPipe implements PipeTransform {

  transform(date: any): any {
    if (date)
      date.setTime(new Date(new Date(date.getTime() - (date.getTimezoneOffset() * 60 *
        1000)).toUTCString()));
console.log(date);

    return date
  }

}