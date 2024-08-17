import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFoodService {
  private apiUrl='https://www.thecocktaildb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {}
   getComidaList(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
   }
}
