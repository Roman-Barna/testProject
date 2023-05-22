import { Component, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SearchService } from "app/service/search.service";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from "@angular/material/core";

import * as _moment from "moment";
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from "moment";
import { MatDatepicker } from "@angular/material/datepicker";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const data_FORMATS = {
  parse: {
    dateInput: "LL",
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMM YYYY ",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: data_FORMATS },
  ],
})
export class SearchComponent implements OnDestroy {
  startDate = new Date(1990, 0, 1);
  date = new FormControl(moment());
  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(public searchService: SearchService) {
    this.subscribeDateSubject();
  }

  subscribeDateSubject() {
    this.date.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value: _moment.Moment) => {
        console.log(value);
        
         this.searchService.changeValueDate(value ? value.year() : null)
      });
  }

  setMonthAndYear(
    normalizedMonthAndYear: _moment.Moment,
    datepicker: MatDatepicker<_moment.Moment>
  ) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
