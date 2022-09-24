import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from './types/Planet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  BASE_URL = 'https://swapi.dev/api/'

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.BASE_URL + 'planets')
  }
}


