import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MovieData } from '../interfaces/movies.interface';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  showMenu: Subject<boolean>
  
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<MovieData>{
    return this.http.get(`${environment.apiURL}/challenges/datasets/dreadful-tomatoes/data.json`) as Observable<MovieData>
  }

}
