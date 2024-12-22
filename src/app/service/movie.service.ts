import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getMoviesById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/${id}`);
  }
}
