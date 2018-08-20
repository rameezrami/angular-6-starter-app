import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string, searchText: string): any[] {

    if (!items) return [];
    if (!searchText || searchText=='') return items;

    return items.filter( it => {
      let searchable = (!field || field!='')?it[field]:it
      return searchable.toLowerCase().includes(searchText);
    });
  }
}