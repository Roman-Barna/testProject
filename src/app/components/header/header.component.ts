import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  startSearch: boolean = false
  showMenu: boolean
  mobileBurger: boolean = undefined
  private readonly unsubscribe$: Subject<void> = new Subject();
  @Output() showSearch = new EventEmitter<boolean>();

  constructor(private router:Router) {
    this.getRoutes()
  }

  search() {
    this.startSearch = !this.startSearch
    this.showSearch.emit(this.startSearch);
  }

  getRoutes() {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.unsubscribe$)
      )
    .subscribe((data: NavigationEnd) => {
      this.showMenu = data.url.length !== 1 ? true : false
      this.showSearch.emit(this.showMenu && this.startSearch)
    }
    )
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
