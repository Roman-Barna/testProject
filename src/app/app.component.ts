import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSearch: boolean = false
  title = 'dreadful-tomato';

  searchBool($event: boolean) {
    this.showSearch = $event
  }
}
