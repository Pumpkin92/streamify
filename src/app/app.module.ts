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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, MovieSearchComponent, MovieDetailsComponent, BrowseAllMoviesComponent, HeaderComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
