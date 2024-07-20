import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = "https://pokeapi.co/api/v2/"

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon').pipe(
      catchError((error => {
        console.error('Error fetching Pokemondata',error);
        return throwError(error);
      }))
    );
  }
}