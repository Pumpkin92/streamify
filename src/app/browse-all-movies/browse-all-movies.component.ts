import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-browse-all-movies',
  templateUrl: './browse-all-movies.component.html',
  styleUrl: './browse-all-movies.component.css',
})
export class BrowseAllMoviesComponent implements OnInit {
  movies: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => (this.movies = data));
  }
  viewMovieDetails(id: number) {
    console.log(id);

    this.router.navigate(['movies/', id]);
  }
}
