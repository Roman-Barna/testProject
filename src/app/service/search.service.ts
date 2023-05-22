import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  _searchMovie = new Subject<string>()
  _searchDate = new Subject<number>()

  constructor() { }

  changeValueSearch(string: string) {
    this._searchMovie.next(string);
  }
  
  changeValueDate(number: number) {
    this._searchDate.next(number);
  }

}
