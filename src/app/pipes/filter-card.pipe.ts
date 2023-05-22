import { Pipe, PipeTransform } from '@angular/core';
import { PaginateService } from 'app/service/paginate.service';
import { Entries } from '../interfaces/movies.interface';

@Pipe({
  name: 'filterCard'
})
export class FilterCardPipe implements PipeTransform {

  constructor(private paginateService: PaginateService) {}

  transform(arr: Entries[], type: string, filter: string = "", filteredDate: number = null, page: number = 1): Entries[] {
    arr = arr.filter(card => card.programType === type && card.title.toLowerCase().includes(filter.toLowerCase())) // paginate
    arr = filteredDate ? arr.filter(card => card.releaseYear === filteredDate) : arr// paginate
    this.paginateService.setDotsPaginate(arr.length)
    return arr.filter((el, index) => (Number(page + '0') - 10) <= index && index < Number(page + '0'))
  }

}
