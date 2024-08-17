import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiFoodService {
  private apiUrl='www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http: HttpClient) {}
   getComidaList(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
   }
}
