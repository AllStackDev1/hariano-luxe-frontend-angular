import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

import {Product} from './Product';


@Injectable({
    providedIn: 'root'
})
export class GeneralService {

    apiPath = 'http://127.0.0.1:8000/api/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.cookieService.get('_XSRF-TOKEN_')}`
        })
    };
    constructor(private http: HttpClient, private cookieService: CookieService ) { }

    addProduct(formDate: Product): Observable<Product[]> {
        const url = this.apiPath + 'add-product/';
        return this.http.post<Product[]>(url, formDate, this.httpOptions).pipe(
            catchError(this.handleError('addProduct', [formDate]))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
