import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

import {User} from './useraccount.component';
import {AuthentificationService} from './authentification.service';

@Injectable()
export class UserService {
    constructor(private http: Http,
                private authenticationService: AuthentificationService) {
    }

    getUser(): Observable<User> {
        // add authorization header with jwt token
        let headers = new Headers({'Authorization': 'Bearer' + this.authenticationService.token});
        let options = new RequestOptions({headers: headers});

        // get user from api
        return this.http.get('', options)
            .map((response: Response) => response.json());
    }
}