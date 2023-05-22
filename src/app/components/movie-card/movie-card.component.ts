import { Component, Input } from '@angular/core';
import { Entries } from 'app/interfaces/movies.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() card: Entries
  showDescription: boolean = false

}
