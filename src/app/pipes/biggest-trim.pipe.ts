import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'biggestTrim'
})
export class BiggestTrimPipe implements PipeTransform {

  transform(value: string): string {
    return  (value.split(" ",50).join(" "));
  }

}
