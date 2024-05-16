import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(items: any[], currentPage: number, itemsPerPage: number, filtering = (item: any) => true): any[] {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.filter(filtering).slice(startIndex, startIndex + itemsPerPage);
  }
}
