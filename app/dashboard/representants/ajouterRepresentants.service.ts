/*import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AjouterRepresentantsService {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    addRepresentant(nom: string, prenom: string, email: string, telephone: string) {
        let headers = new Headers({'Authorization': 'Bearer' + this.token});
        let options = new RequestOptions({headers: headers});

        return this.http.post('',
            JSON.stringify({nom: nom, prenom: prenom, email: email, telephone: telephone}), options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                return !!token;
            });
    }
}
*/