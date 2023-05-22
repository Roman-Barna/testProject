import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { PaginateService } from "app/service/paginate.service";
import { SearchService } from "app/service/search.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-paginate",
  templateUrl: "./paginate.component.html",
  styleUrls: ["./paginate.component.scss"],
})
export class PaginateComponent implements OnInit, OnDestroy {
  @Input() firstToTal: number;
  page: number = 1;
  dots: number[] = [];
  @Output() paginate = new EventEmitter<number>();
  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(
    public paginateService: PaginateService,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.createDots(this.firstToTal);
    this.getDots();
    this.filteredDate();
  }

  paginateEvent(page: number) {
    if (this.page !== page) {
      this.paginate.emit(page);
      this.page = page;
    }
  }

  filteredDate() {
    this.searchService._searchMovie
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((filter: string) => (filter ? this.paginateEvent(1) : null));
  }

  getDots() {
    this.paginateService.dots
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((count: number) => {
      this.createDots(count);
    });
  }

  createDots(count: number) {
    this.dots = [];
    count = Math.ceil(count / 10);
    for (let index = 0; index < count; index++) {
      this.dots.push(index);
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
