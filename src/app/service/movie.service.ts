import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) {}
  //add api functions here later
  // get by name
  //get by rating
  //get by genre - using filter on form
}
