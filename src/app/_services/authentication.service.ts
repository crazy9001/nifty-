import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        return this.http.post<any>(environment.apiEndPoin + 'authenticate/login', {username: username, password: password})
            .pipe(map(data => {
                // login successful if there's a jwt token in the response
                if (data) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', JSON.stringify(data.token));
                }
                return data;
            }));
    }
}
