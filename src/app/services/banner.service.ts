import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  private url:string = "https://hack.kunderlabs.com/exam/telecom/api/products/new";
  private headers:any = {
    'Content-Type': 'application/json'
  };

  getBannerInformation(){
    return this.http.get<any>(this.url, {
      headers: this.headers,
    })
    .pipe(map((response) => (response as any).product))
    .pipe(
      catchError(
        (error: any): Observable<any> => {
          console.log("There was an error: ", error.message)
          return of({error: true});
        }
      ),
    );
  }
}
