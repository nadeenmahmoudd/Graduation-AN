import { Pipe, PipeTransform } from '@angular/core';
import { Services } from '../interfaces/services';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(providers: any[], searchTerm:string): any[] {
    return providers.filter((element)=>element.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
