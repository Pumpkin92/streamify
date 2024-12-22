import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | null = null;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  id: number = 0;
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = parseInt(param['id']);
    });

    this.movieService.getMoviesById(this.id).subscribe((movie) => {
      this.movie = movie;
    });
  }
  getStarArray(rating: number): number[] {
    return Array(rating);
  }
}
