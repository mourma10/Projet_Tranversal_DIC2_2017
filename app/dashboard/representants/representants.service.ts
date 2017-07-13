import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepresentantServices {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    ajouterRepresentant(nomRepresentant: string, prenomRepresentant: string, email: string, telephone: string) {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.post('', JSON.stringify(
            {
                representant: {
                    nomRepresentant: nomRepresentant,
                    prenomRepresentant: prenomRepresentant,
                    telephone: telephone
                },
                user: {email: email}
            }),
            options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }

    listerRepresentants() {
        let headers = new Headers({'Authorization': 'Bearer ' + this.token});
        let options = new RequestOptions({headers: headers});
        return this.http.get('', options)
            .map((response: Response) => response.json());
    }
}
