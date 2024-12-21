import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
})
export class MovieSearchComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  searchTerm: string = '';
  searchField: 'title' | 'genre' | 'rating' = 'title';
  isSearching: boolean = false;

  constructor(public movieService: MovieService) {}
  ngOnInit(): void {}
  search(): void {
    this.isSearching = true; //not working look into

    this.movieService.getMovies().subscribe((movies) => {
      this.filteredMovies = movies.filter((movie: any) => {
        if (this.searchField === 'genre') {
          console.log('matches', this.filteredMovies);

          return (movie.genre as string[])?.some((genre) =>
            genre.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        } else {
          return movie[this.searchField]
            ?.toString()
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase());
        }
      });
    });
  }

  showAllMovies() {
    this.movieService
      .getMovies()
      .subscribe((response) => console.log(response));
  }
}
