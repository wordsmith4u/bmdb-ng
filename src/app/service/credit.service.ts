import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credit} from '../model/credit.class';

const URL = 'http://localhost:8080/credits';
@Injectable({
    providedIn: 'root'
})
export class CreditService {

    constructor(private http: HttpClient) { }

    // Service functions
    // get all credits
    getAll(): Observable<Credit[]> {
        return this.http.get(URL+'/') as Observable<Credit[]>; 
    }

    // create a credit
    create(credit: Credit): Observable<Credit> {
        return this.http.post(URL+'/', credit) as Observable<Credit>; 
    }
}