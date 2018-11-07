import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, field?: string): any {
    if (array) {
      const sortFiled = field[0];
      const sortDirection = field[1];

      let modifier = 1;
      if (sortDirection === 'desc') {
        modifier = -1;
      }

      array.sort((a: any, b: any) => {
        if (a[sortFiled] < b[sortFiled]) {
          return -1 * modifier;
        } else if (a[sortFiled] > b[sortFiled]) {
          return 1 * modifier;
        } else {
          return 0;
        }
      });

    }
    return array;
  }

}
