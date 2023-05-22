import { Injectable } from '@angular/core';
import { Entries } from 'app/interfaces/movies.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {
  dots = new Subject<number>()

  setDotsPaginate(index: number) {
    this.dots.next(index)
  }

  filteredArray(data: Entries[], type: string): number {
    return data.filter(el => el.programType === type).length
  }

}
