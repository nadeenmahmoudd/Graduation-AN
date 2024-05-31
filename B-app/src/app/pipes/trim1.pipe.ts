import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim1'
})
export class Trim1Pipe implements PipeTransform {

  transform(value: string): string {
    return  (value.split(" ",1).join(" "));
  }


}
