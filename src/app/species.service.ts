import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Species } from './types/Species';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
	BASE_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(this.BASE_URL + 'species');
  }
} 


