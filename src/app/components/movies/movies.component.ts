import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MovieData } from "app/interfaces/movies.interface";
import { MovieService } from "app/service/movie.service";
import { SearchService } from "app/service/search.service";
import { PaginateService } from "app/service/paginate.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit, OnDestroy {
  cards!: MovieData;
  typeMovies: string;
  filtered: string
  filteredDate: number
  paginationTotal: number;
  page: number;
  private readonly unsubscribe$: Subject<void> = new Subject();
  @Output() showSearch = new EventEmitter<boolean>();

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private paginateService: PaginateService
  ) {}

  ngOnInit(): void {
    this.getDataCard();
    this.getParams();
    this.subscribeFilterSearch();
    this.subscribeFilterDate()
  }

  subscribeFilterDate() {
    this.searchService._searchDate
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((filterNum: number) => this.filteredDate = filterNum);
  }

  subscribeFilterSearch() {
    this.searchService._searchMovie
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((filterStr: string) => this.filtered = filterStr);
  }

  getParams() {
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => (this.typeMovies = params.type));
  }

  getDataCard() {
    this.movieService
      .getAllMovies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: MovieData) => {
        this.cards = data;
        this.paginationTotal = this.paginateService.filteredArray(
          data.entries,
          this.typeMovies
        );
      });
  }

  paginate(page: number) {
    this.page = page;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
