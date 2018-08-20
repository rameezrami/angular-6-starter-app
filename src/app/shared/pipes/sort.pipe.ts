import { Pipe, PipeTransform } from '@angular/core';
import  * as _ from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(data: any[], options: any): any[] {

    let sortOrder = options.order
    
    if (data.length==0 || sortOrder=='') return data

    return  _.orderBy(data, [options.index],[sortOrder]);
  }

}
