import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { PaginateComponent } from './components/paginate/paginate.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieCardComponent,
    HomeComponent,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    SharedModule,
    AppRoutingModule,
    HeaderComponent,
    RouterModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
