import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthentificationService {
    public token: string;
    public user: any ;

    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        let options = new RequestOptions({headers: headers});

        return this.http.post('http://localhost:8000/api/tokens', {}, options)
            .map((response: Response) => {
                let self  = this;
                let token = response.json() && response.json().token;
                let user = response.json() && response.json().user;
                if (token) {
                    self.token = token;
                    self.user = user;
                    localStorage.setItem('currentUser', JSON.stringify({token: token, user: user}));
                    return true;
                }
            });

    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}