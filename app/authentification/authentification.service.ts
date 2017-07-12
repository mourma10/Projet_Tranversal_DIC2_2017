import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthentificationService {
    public token: string;

    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        let options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:8000/api/tokens', null, options)
            .map((response: Response) => {
                console.log(response.json());
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                } else {
                    return false;
                }
            }).catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error')
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}