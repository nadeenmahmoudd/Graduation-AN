import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'biggerTrim'
})
export class BiggerTrimPipe implements PipeTransform {

  transform(value: string): string {
    return  (value.split(" ",8).join(" "));
  }

}
