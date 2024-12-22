import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowseAllMoviesComponent } from './browse-all-movies/browse-all-movies.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, MovieSearchComponent, MovieDetailsComponent, BrowseAllMoviesComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
