import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  loading: boolean = false;
  isSearching: boolean = false;

  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  search(): void {
    (this.loading = true),
      this.movieService.getMovies().subscribe((movies) => {
        this.filteredMovies = movies.filter((movie: any) => {
          if (this.searchField === 'genre') {
            return (movie.genre as string[])?.some(
              (genre) =>
                genre.toLowerCase().includes(this.searchTerm.toLowerCase()),
              (this.isSearching = true)
            );
          } else {
            return movie[this.searchField]
              ?.toString()
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase());
          }
        });
      });

    this.loading = false;
  }

  showAllMovies() {
    this.movieService
      .getMovies()
      .subscribe((response) => console.log(response));
  }

  viewMovieDetails(id: number) {
    console.log(id);

    this.router.navigate([id], { relativeTo: this.route });
  }
}
